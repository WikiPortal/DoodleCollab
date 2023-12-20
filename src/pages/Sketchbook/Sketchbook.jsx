import React, { useRef, useState } from "react";
import { Stage, Layer, Line } from "react-konva";
import { Stack, Button } from "@mui/material";
import Navbar from "../../constants/Navbar/Navbar";

const Sketchbook = () => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;

    const pos = e.target.getStage().getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([pos.x, pos.y]);

    setLines([...lines.slice(0, -1), lastLine]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

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
        <Button variant="outlined" size="small" onClick={() => setLines([])}>
          Clear
        </Button>
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
              stroke="black"
              strokeWidth={2}
              tension={0.5}
              lineCap="round"
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
};

export default Sketchbook;
