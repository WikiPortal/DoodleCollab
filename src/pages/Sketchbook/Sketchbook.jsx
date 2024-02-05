import { Fragment, useEffect, useRef, useState } from "react";
import { Stage, Layer, Line } from "react-konva";
import { Paper, Slider, IconButton, Popper } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { BsDownload, BsRecordCircle } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import {
  FaRedo,
  FaTools,
  FaRegTrashAlt,
  FaUndo,
  FaRegStopCircle,
} from "react-icons/fa";

import jsPDF from "jspdf";
import axios from "axios";
import RecordRTC from "recordrtc";

import LoginRequired from "../LoginRequired/LoginRequired";
import UserProfile from "../../components/UserProfile/UserProfile";
import { useAppContext } from "../../context/AppContext";
import "./sketchbook.css";

import { hiddencomponent } from "../../lib/utils";
import { toolsData } from "./data";

const Sketchbook = () => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const [brushSz, setBrushSz] = useState(2);
  const [selectedTool, setSelectedTool] = useState("brush");
  const [brushColor, setBrushColor] = useState("#000");
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("file");
  const stageRef = useRef(null);
  const [ftype, setFtype] = useState("png");
  const [removedLines, setRemovedLines] = useState([]);
  const [userData, setUserData] = useState({
    name: "Doodle Collab",
    avatar: "",
  });
  const { updateLoggedIn, isLoggedIn } = useAppContext();
  const [toggleToolsMenuBar, setToggleToolsMenuBar] = useState(false);
  const [toolsPopoverEl, setToolsPopoverEl] = useState(null);
  const [recording, setRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [recordRTC, setRecordRTC] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      updateLoggedIn(false);
    } else {
      axios
        .get(
          "https://doodlecollab-backend.onrender.com/api/users/validateToken",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          updateLoggedIn(true);
        })
        .catch(() => {
          updateLoggedIn(false);
          localStorage.removeItem("token");
        });
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
        stroke: selectedTool === "eraser" ? "#fff" : brushColor,
      },
    ]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;

    const pos = e.target.getStage().getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([pos.x, pos.y]);
    lastLine.brushSize = brushSz;
    lastLine.stroke = selectedTool === "eraser" ? "#fff" : brushColor;

    setLines([...lines.slice(0, -1), lastLine]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleBSChange = (e) => {
    setBrushSz(e.target.value);
  };

  const handleColorChange = (color) => {
    console.log(color);
    setBrushColor(color);
  };

  const downloadURI = (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = (fileType) => {
    setOpen(false);
    const dataURL = stageRef.current.toDataURL();
    const canvas = document.createElement("canvas");
    canvas.width = stageRef.current.width();
    canvas.height = stageRef.current.height();
    const context = canvas.getContext("2d");
    if ((fileType || ftype) !== "png") {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    const image = new Image();
    image.src = dataURL;
    image.onload = () => {
      context.drawImage(image, 0, 0);
      if ((fileType || ftype) === "pdf") {
        const pdf = new jsPDF("l", "px", [canvas.width, canvas.height]);
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
        pdf.save(`${fileName}.pdf`);
        return;
      }
      // Check if it's a video recording and handle accordingly
      if (lines.some((line) => line.video)) {
        const videoBlob = new Blob([recordRTC.getBlob()], { type: "video/webm" });
        const videoUrl = URL.createObjectURL(videoBlob);
        downloadURI(videoUrl, `${fileName}.${fileType || ftype}`);
      } else {
        downloadURI(canvas.toDataURL(), `${fileName}.${fileType || ftype}`);
      }
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

  const toggleRecording = () => {
    if (!recording) {
      navigator.mediaDevices
        .getDisplayMedia({ video: true })
        .then((stream) => {
          const recorder = RecordRTC(stream, { type: "video" });
          recorder.startRecording();
          setRecordRTC(recorder);
          setMediaStream(stream);
          setRecording(true);
        })
        .catch((error) => console.error("Error accessing screen:", error));
    } else {
      recordRTC.stopRecording(() => {
        const blob = recordRTC.getBlob();
        const url = URL.createObjectURL(blob);

        // Add the recorded video as a line on the canvas
        setLines([
          ...lines,
          {
            points: [url],
            brushSize: 2,
            stroke: "#000",
            video: true,
          },
        ]);

        // Stop the screen recording stream
        mediaStream.getTracks().forEach((track) => track.stop());

        setRecording(false);
      });
    }
  };

  // TOOLS POPOVER SPECIFIC
  const handlePopoverOpen = (event) => {
    setToolsPopoverEl(
      toolsPopoverEl === event.currentTarget ? null : event.currentTarget
    );
  };

  const openToolsPopover = Boolean(toolsPopoverEl);
  const toolsPopoverId = openToolsPopover ? "tools-popover" : undefined;

  return isLoggedIn ? (
    <>
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
      <UserProfile userName={userData.name} userAvatar={userData.avatar} />

      {/* -----------------------------
          TOOLS MENUBAR SECTION STARTS
          ----------------------------- */}
      <aside className="fixed left-1/2 -translate-x-1/2 top-32 h-0">
        <button
          title={
            toggleToolsMenuBar ? "Close tools menu bar" : "Open tools menu bar"
          }
          onClick={() => {
            setToggleToolsMenuBar(!toggleToolsMenuBar);
            setToolsPopoverEl(null);
          }}
          className="shadow-lg border rounded-full p-[6px] absolute left-1/2 -translate-x-1/2 -translate-y-[80%] size-9"
        >
          {toggleToolsMenuBar ? (
            <HiXMark className="size-full text-[#757575]" />
          ) : (
            <FaTools className="size-full text-[#757575]" />
          )}
        </button>
        <div
          className={hiddencomponent(
            "overflow-hidden transition-[visibility] p-3",
            toggleToolsMenuBar ? "visible" : "invisible"
          )}
        >
          <div
            className={hiddencomponent(
              "transition-transform isolate py-3 px-4 relative before:tools-menu-3d-rotate before:content-[''] before:absolute before:inset-0 before:bg-white before:shadow-lg before:border before:rounded-b-lg before:-z-10 flex gap-1",
              toggleToolsMenuBar ? "" : "-translate-y-[100%]"
            )}
          >
            {toolsData.map((tool) =>
              /**
               *  Show the popover with brush size slider and
               *  color picker only for the brush and eraser tools
               */
              ["brush", "eraser"].includes(tool.content) ? (
                <Fragment key={tool.id}>
                  <IconButton
                    color={selectedTool === tool.content ? "primary" : ""}
                    title={tool.title}
                    onClick={(e) => {
                      setSelectedTool(tool.content);
                      handlePopoverOpen(e);
                    }}
                  >
                    {tool.icon}
                  </IconButton>

                  <Popper
                    id={toolsPopoverId}
                    open={openToolsPopover}
                    anchorEl={toolsPopoverEl}
                    placement="left"
                    sx={{ zIndex: 100 }}
                  >
                    <Paper sx={{ p: 2, width: 300 }}>
                      <div>
                        <h3>Brush size: {brushSz}</h3>
                        <Slider
                          defaultValue={2}
                          aria-label="Small"
                          valueLabelDisplay="auto"
                          min={1}
                          max={50}
                          onChange={handleBSChange}
                        />
                      </div>

                      {selectedTool === "brush" ? (
                        <div>
                          <h3>Brush color</h3>
                          <MuiColorInput
                            onChange={handleColorChange}
                            value={brushColor}
                          />
                        </div>
                      ) : null}
                      <IconButton
                        sx={{ mt: "2px" }}
                        onClick={() => setToolsPopoverEl(null)}
                      >
                        <HiXMark />
                      </IconButton>
                    </Paper>
                  </Popper>
                </Fragment>
              ) : (
                <IconButton
                  color={selectedTool === tool.content ? "primary" : ""}
                  key={tool.id}
                  title={tool.title}
                  onClick={() => setSelectedTool(tool.content)}
                >
                  {tool.icon}
                </IconButton>
              )
            )}

            <IconButton title="Insert image">
              <MdOutlinePermMedia />
            </IconButton>

            <IconButton onClick={() => handleClear()} title="Clear">
              <FaRegTrashAlt />
            </IconButton>

            <IconButton onClick={() => handleUndo()} title="Undo">
              <FaUndo />
            </IconButton>

            <IconButton onClick={() => handleRedo()} title="Redo">
              <FaRedo />
            </IconButton>

            <IconButton onClick={() => setOpen(true)} title="Download">
              <BsDownload />
            </IconButton>

            <IconButton
              onClick={() => {
                handleDownload("pdf");
              }}
              title="Download as PDF"
            >
              <FaRegFilePdf />
            </IconButton>

            <IconButton>
              <IoIosShareAlt title="Share" />
            </IconButton>

            <IconButton
              onClick={toggleRecording}
              title={recording ? "Stop Recording" : "Start Recording"}
            >
              {recording ? <FaRegStopCircle /> : <BsRecordCircle />}
            </IconButton>
          </div>
        </div>
      </aside>
      {/*  ------------------------------
             TOOLS MENUBAR SECTION ENDS
            ------------------------------ */}
    </>
  ) : (
    <LoginRequired />
  );
};

export default Sketchbook;
