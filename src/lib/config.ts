import { CogIcon, FileText, HouseIcon, PlusIcon } from "lucide-react";

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
    href: "/create",
    title: "Vytvoriť",
    Icon: PlusIcon,
  },
  {
    href: "/settings",
    title: "Nastavenia",
    Icon: CogIcon,
  },
];
