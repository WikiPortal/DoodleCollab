import { CiText } from "react-icons/ci";
import { FaEraser, FaPen } from "react-icons/fa";
import { PiCursorFill, PiShapesLight } from "react-icons/pi";

export const toolsData = [
  {
    id: 1,
    title: "Selection",
    icon: <PiCursorFill size={20} />,
    content: "selection",
  },
  {
    id: 2,
    title: "Draw",
    icon: <FaPen size={20} />,
    content: "brush",
  },
  {
    id: 3,
    title: "Eraser",
    icon: <FaEraser size={20} />,
    content: "eraser",
  },
  {
    id: 4,
    title: "Shapes",
    icon: <PiShapesLight size={20} />,
    content: "shapes",
  },
  {
    id: 5,
    title: "Text",
    icon: <CiText size={20} />,
    content: "text",
  },
];
