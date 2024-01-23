import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Line } from "react-konva";
import {  Stack,  Button,  Paper,  Slider,  Modal,  Select,  MenuItem,  IconButton,  Grid,  Input } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import jsPDF from "jspdf";
import {  FaEraser,  FaRedo,  FaRegTrashAlt,  FaSave,  FaUndo } from "react-icons/fa";
import LoginRequired from "../Login Required/loginRequired";

const Sketchbook = () => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const [brushSz, setBrushSz] = useState(2);
  const [selectedColor, setSelectedColor] = useState("#000");
  const [selectedTool, setSelectedTool] = useState("brush");
  const [brushColor, setBrushColor] = useState("#000000");
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("file");
  const stageRef = useRef(null);
  const [ftype, setFtype] = useState("png");
  const [removedLines, setRemovedLines] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);

  const handleMouseDown = (e) => {
    setRemovedLines([]);

    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([
      ...lines,
      {
        points: [pos.x, pos.y],
        brushSize: brushSz,
        stroke: selectedTool === "eraser" ? "#fff" : selectedColor,
      },
    ]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;

    const pos = e.target.getStage().getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([pos.x, pos.y]);
    lastLine.brushSize = brushSz;
    lastLine.stroke = selectedTool === "eraser" ? "#fff" : selectedColor;

    setLines([...lines.slice(0, -1), lastLine]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleBSChange = (e) => {
    setBrushSz(e.target.value);
  };

  const handleColorChange = (e) => {
    setBrushColor(e.target.value);
  };

  const downloadURI = (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSave = () => {
    console.log(ftype);
    setOpen(false);
    const dataURL = stageRef.current.toDataURL();
    const canvas = document.createElement("canvas");
    canvas.width = stageRef.current.width();
    canvas.height = stageRef.current.height();
    const context = canvas.getContext("2d");
    if (ftype !== "png") {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    const image = new Image();
    image.src = dataURL;
    image.onload = () => {
      context.drawImage(image, 0, 0);
      if (ftype === "pdf") {
        const pdf = new jsPDF("l", "px", [canvas.width, canvas.height]);
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
        pdf.save(`${fileName}.pdf`);
        return;
      }
      downloadURI(canvas.toDataURL(), `${fileName}.${ftype}`);
    };
  };

  const handleClear = () => {
    setRemovedLines(lines);
    setLines([]);
  };

  const handleUndo = () => {
    if (lines.length > 0) {
      setRemovedLines((prev) => [...prev, lines[lines.length - 1]]);
    }
    setLines((prev) => prev.slice(0, -1));
  };

  const handleToolChange = (e) => {
    setSelectedTool(e.target.value);
  };

  const handleRedo = () => {
    if (removedLines.length === 0) return;

    if (lines.length === 0 && removedLines.length > 0) {
      setLines(removedLines);
      setRemovedLines([]);
      return;
    }

    setLines((prev) => [...prev, removedLines[removedLines.length - 1]]);
    setRemovedLines((prev) => prev.slice(0, -1));
  };

  return (
    loggedIn ? <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        ref={stageRef}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.stroke}
              strokeWidth={line.brushSize}
              tension={0.5}
              lineCap="round"
            />
          ))}
        </Layer>
      </Stage>
      <Paper
        style={{
          position: "fixed",
          top: "15vh",
          left: "83vw",
          width: "10vw",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Menu</h1>
        <h3>Brush size: {brushSz}</h3>
        <Slider
          defaultValue={2}
          aria-label="Small"
          valueLabelDisplay="auto"
          min={1}
          max={10}
          onChange={handleBSChange}
        />
        <h3>Brush color</h3>
        <MuiColorInput onChange={handleColorChange} value={brushColor} />

        <Stack justifyContent="center" alignItems="center" mt="1em" spacing={1}>
          <Button
            variant="outlined"
            size="small"
            onClick={handleToolChange}
            value="eraser"
          >
            Eraser
          </Button>
          <Button variant="outlined" size="small" onClick={() => handleClear()}>
            Clear
          </Button>
          <Button variant="outlined" size="small" onClick={() => handleUndo()}>
            Undo
          </Button>
          <Button variant="outlined" size="small" onClick={() => handleRedo()}>
            Redo
          </Button>
          <Button variant="outlined" size="small" onClick={() => setOpen(true)}>
            Save
          </Button>
        </Stack>

        <Grid container spacing={1} marginTop={2}>
          <Grid item xs={4}>
            <IconButton onClick={handleToolChange} value="eraser">
              <FaEraser />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={() => handleClear()}>
              <FaRegTrashAlt />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={() => handleUndo()}>
              <FaUndo />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={() => handleRedo()}>
              <FaRedo />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={() => setOpen(true)}>
              <FaSave />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper
          style={{
            width: "25vw",
            height: "50vh",
            position: "fixed",
            top: "25vh",
            left: "35vw",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Save</h1>
          <h3>File name</h3>
          <Input
            placeholder="File name"
            onChange={(e) => setFileName(e.target.value)}
            defaultValue="file"
          />
          <h3>File type</h3>
          <Select defaultValue="png" onChange={(e) => setFtype(e.target.value)}>
            <MenuItem value="png">PNG</MenuItem>
            <MenuItem value="jpg">JPG</MenuItem>
            <MenuItem value="pdf">PDF</MenuItem>
          </Select>
          <h3>Save</h3>
          <Button variant="outlined" size="small" onClick={handleSave}>
            Save
          </Button>
        </Paper>
      </Modal>
    </> :
    <LoginRequired />
  );
};

export default Sketchbook;
