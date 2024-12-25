import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const translatePathName = (path: string) => {
  const pathName = path.split("/")[1];
  switch (pathName) {
    case "dashboard":
      return "Prehľad";
    case "create":
      return "Vytvoriť";
    case "reports":
      return "Výkazy";
    case "settings":
      return "Nastavenia";
  }
};
