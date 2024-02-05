import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function hiddencomponent(...inputs) {
  return twMerge(clsx(inputs));
}
