import { CiText } from "react-icons/ci";
import { FaEraser, FaPen } from "react-icons/fa";
import { PiCursorFill, PiShapesLight } from "react-icons/pi";

export const toolsData = [
  {
    id: 1,
    title: "Selection",
    icon: <PiCursorFill />,
    content: "selection",
  },
  {
    id: 2,
    title: "Draw",
    icon: <FaPen />,
    content: "brush",
  },
  {
    id: 3,
    title: "Eraser",
    icon: <FaEraser />,
    content: "eraser",
  },
  {
    id: 4,
    title: "Shapes",
    icon: <PiShapesLight />,
    content: "shapes",
  },
  {
    id: 5,
    title: "Text",
    icon: <CiText />,
    content: "text",
  },
];
