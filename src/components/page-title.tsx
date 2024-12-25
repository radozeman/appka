"use client";
import { translatePathName } from "@/lib/utils";
import { usePathname } from "next/navigation";

const PageTitle = () => {
  const pathName = usePathname();
  const translatedPathName = translatePathName(pathName);
  return (
    <h1 className="text-xl font-semibold tracking-tight px-8 pt-8">
      {translatedPathName}
    </h1>
  );
};

export default PageTitle;
