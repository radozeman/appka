import { CogIcon, FileText, HouseIcon } from "lucide-react";

export const navigationConfig = [
  {
    href: "/dashboard",
    title: "Prehľad",
    Icon: HouseIcon,
  },
  {
    href: "/reports",
    title: "Výkazy",
    Icon: FileText,
  },
  {
    href: "/settings",
    title: "Nastavenia",
    Icon: CogIcon,
  },
];
