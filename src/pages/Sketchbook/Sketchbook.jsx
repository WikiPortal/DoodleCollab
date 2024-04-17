import { Fragment, useEffect, useRef, useState } from "react";
import { Stage, Layer, Line, Image } from "react-konva";
import { Popper } from "@mui/material";
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
import RecordRTC from "recordrtc";

import UserProfile from "../../components/UserProfile/UserProfile";
import { useTheme } from "../../context/ThemeContext";
import "./sketchbook.css";

import { hiddencomponent } from "../../lib/utils";
import { toolsData } from "./data";
import ReactImageUploading from "react-images-uploading";

const Sketchbook = () => {
  const [lines, setLines] = useState([]);
  const [brushSz, setBrushSz] = useState(2);
  const [selectedTool, setSelectedTool] = useState("brush");
  const [brushColor, setBrushColor] = useState("#000");
  const [fileName, setFileName] = useState("file");
  const [ftype, setFtype] = useState("png");
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const [userData, setUserData] = useState({
    name: "Doodle Collab",
    avatar: "",
  });
  const [toggleToolsMenuBar, setToggleToolsMenuBar] = useState(false);
  const [recording, setRecording] = useState(false);

  const isDrawing = useRef(false);
  const [open, setOpen] = useState(false);
  const stageRef = useRef(null);
  const [removedLines, setRemovedLines] = useState([]);
  const [toolsPopoverEl, setToolsPopoverEl] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [recordRTC, setRecordRTC] = useState(null);
  const { isDarkMode } = useTheme();

  // Drawing event handlers

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

  // Utility functions

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageFile(reader.result); // Store the uploaded image file
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadURI = (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload=(fileType)=>{
    setOpen(false);
    const stage = stageRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = stageRef.current.width();
    canvas.height = stageRef.current.height();

    fileType.forEach((fileType) => {
	if ((fileType || ftype) === "pdf") {
        const pdf = new jsPDF("l", "px", [canvas.width, canvas.height]);
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
        pdf.save(`${fileName}.pdf`);
        return;
       }
	// Check if it's a video recording and handle accordingly
	else if(lines.some((line) => line.video)) {
         const videoBlob = new Blob([recordRTC.getBlob()], {
           type: "video/webm",
         });
         const videoUrl = URL.createObjectURL(videoBlob);
         downloadURI(videoUrl, `${fileName}.${fileType || ftype}`);
       }
       else{
        // Handle image download
        const mimeType = `image/${fileType}`;
        const quality = 1;
        const dataURL = stage.toDataURL({ mimeType, quality });
  
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = `sketchbook.${fileType}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });}; 
  // Drawing action handlers

  const handleBSChange = (e) => {
    setBrushSz(e.target.value);
  };

  const handleColorChange = (color) => {
    console.log(color);
    setBrushColor(color);
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

  // Render the sketchbook UI

  return (
    <>
      <Stage
        className={`sketchbook-section ${
          isDarkMode ? "dark-mode" : "white-mode"
        }`}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        ref={stageRef}
      >
        <Layer>
          {images.map((imageData, index) => (
            <Image key={index} image={imageData} x={250} y={250} />
          ))}

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
                <Fragment className="border-2 border-red-600" key={tool.id}>
                  {/* <IconButton
                    color={selectedTool === tool.content ? "primary" : ""}
                    title={tool.title}
                    onClick={(e) => {
                      setSelectedTool(tool.content);
                      handlePopoverOpen(e);
                    }}
                  >
                    {tool.icon}
                  </IconButton> */}
                  <button
                    className={` hover:bg-gray-100 rounded-full p-3 focus:outline-none ${selectedTool === tool.content ? "text-blue-500" : "text-gray-600"}`}
                    title={tool.title}
                    onClick={(e) => {
                      setSelectedTool(tool.content);
                      handlePopoverOpen(e);
                    }}
                  >
                    {tool.icon}
                  </button>

                  <Popper
                    id={toolsPopoverId}
                    open={openToolsPopover}
                    anchorEl={toolsPopoverEl}
                    placement="left"
                    sx={{ zIndex: 100 }}
                  >
                    <div className="border-2 space-y-2 p-2 w-[300px] bg-white">
                      <div>
                        <h3>Brush size: {brushSz}</h3>
                        <div className="w-full">
                          <input
                            type="range"
                            className="w-full h-1 rounded-lg  my-2 appearance-none bg-blue-200"
                            min="1"
                            max="50"
                            step="1"
                            value={brushSz}
                            onChange={(e) => setBrushSz(e.target.value)}
                            style={{
                              // Customize the slider thumb size
                              "--thumb-size": "20px", // Adjust the size as needed
                              // Customize the slider thumb color
                              "--thumb-color": "blue", // Adjust the color as needed
                            }}
                          />
                          <style>{`
    input[type="range"]::-webkit-slider-thumb {
      width: var(--thumb-size);
      height: var(--thumb-size);
      background-color: var(--thumb-color);
      border-radius: 50%;
      appearance: none;
      cursor: pointer;
    }
  `}</style>
                        </div>
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
                      <button
                        className={` hover:bg-gray-100 rounded-full p-3 focus:outline-none`}
                        // style={{
                        //   border: "2px solid red",
                        // }}
                        onClick={() => setToolsPopoverEl(null)}
                      >
                        <HiXMark />
                      </button>
                    </div>
                  </Popper>
                </Fragment>
              ) : (
                <button
                  // style={{
                  //   border: "2px solid red",
                  // }}
                  // color={selectedTool === tool.content ? "primary" : ""}
                  className={` hover:bg-gray-100 rounded-full p-3 focus:outline-none ${selectedTool === tool.content ? "text-blue-500" : "text-gray-600"}`}
                  key={tool.id}
                  title={tool.title}
                  onClick={() => setSelectedTool(tool.content)}
                >
                  {tool.icon}
                </button>
              )
            )}
            <ReactImageUploading
              multiple
              value={images}
              onChange={(imageList, addUpdateIndex) => {
                const updatedImages = imageList.map((imageData) => {
                  const imageElement = new window.Image();
                  imageElement.src = imageData.data_url;
                  return imageElement;
                });
                setImages(updatedImages);
              }}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({ imageList, onImageUpload, isDragging, dragProps }) => (
                <div
                  style={isDragging ? { color: "red" } : undefined}
                  {...dragProps}
                >
                  <button
                    className={` hover:bg-gray-100 rounded-full p-3 focus:outline-none`}
                    // style={{
                    //   border: "2px solid red",
                    // }}
                    onClick={onImageUpload}
                    title="Insert image"
                  >
                    <MdOutlinePermMedia size={20} />
                  </button>
                </div>
              )}
            </ReactImageUploading>
            <button
              className={` hover:bg-gray-100 rounded-full p-3 focus:outline-none`}
              onClick={() => handleClear()}
              title="Clear"
            >
              <FaRegTrashAlt size={20} />
            </button>

            <button
              className={` hover:bg-gray-100 rounded-full p-3 focus:outline-none`}
              onClick={() => handleUndo()}
              title="Undo"
            >
              <FaUndo size={20} />
            </button>

            <button
              className={` hover:bg-gray-100 rounded-full p-3 focus:outline-none`}
              onClick={() => handleRedo()}
              title="Redo"
            >
              <FaRedo size={20} />
            </button>

            <button
              className={` hover:bg-gray-100 rounded-full p-3 focus:outline-none`}
              onClick={() => setOpen(true)}
              title="Download"
            >
              <BsDownload size={20} />
            </button>

            <button
              className={` hover:bg-gray-100 rounded-full p-3 focus:outline-none`}
              onClick={() => {
                handleDownload("pdf");
              }}
              title="Download as PDF"
            >
              <FaRegFilePdf size={20} />
            </button>

            <button
              className={` hover:bg-gray-100 rounded-full p-3 focus:outline-none`}
            >
              <IoIosShareAlt title="Share" size={20} />
            </button>

            <button
              className={` hover:bg-gray-100 rounded-full p-3 focus:outline-none`}
              onClick={toggleRecording}
              title={recording ? "Stop Recording" : "Start Recording"}
            >
              {recording ? (
                <FaRegStopCircle size={20} />
              ) : (
                <BsRecordCircle size={20} />
              )}
            </button>
          </div>
        </div>
      </aside>
      {/*  ------------------------------
             TOOLS MENUBAR SECTION ENDS
            ------------------------------ */}
    </>
  );
};

export default Sketchbook;
