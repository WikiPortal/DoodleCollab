import React, { useRef, useState } from "react";
import { Stage, Layer, Line } from "react-konva";
import { Stack, Button, Paper, Slider, Modal, Select, MenuItem } from "@mui/material";
import Navbar from "../../constants/Navbar/Navbar";
import { MuiColorInput } from 'mui-color-input'
import Input from "@mui/material/Input";


const Sketchbook = () => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const [brushSz, setBrushSz] = useState(2);
  const [brushColor, setBrushColor] = useState('#000000');

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y], brushSize: brushSz, stroke: brushColor }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;

    const pos = e.target.getStage().getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([pos.x, pos.y]);
    lastLine.brushSize = brushSz;
    lastLine.stroke = brushColor;

    setLines([...lines.slice(0, -1), lastLine]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleBSChange = (e) => {
    setBrushSz(e.target.value);
  }

  const handleColorChange = (e) => {
    setBrushColor(e);
  }


  return (
    <>
      <Navbar />

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt="1rem"
        spacing={2}
      >
        
      </Stack>

      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
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
      <Paper style={{position: 'fixed', top: '10vh', left: '80vw', width: '10vw', display: 'flex', flexDirection: 'column', padding: '20px'}}>
        <h1 style={{textAlign: 'center'}}>Menu</h1>
        <h3>Brush size: {brushSz}</h3>
        <Slider defaultValue={2} aria-label="Small" valueLabelDisplay="auto" min={1} max={10} onChange={handleBSChange}/>
        <h3>Brush color</h3>
        <MuiColorInput defaultValue="#000000" onChange={handleColorChange} value={brushColor}/>
        <h3>Clear</h3>
        <Button variant="outlined" size="small" onClick={() => setLines([])}>Clear</Button>
      </Paper>
    </>
  );
};

export default Sketchbook;
