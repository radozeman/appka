"use client";
import { navigationConfig } from "@/lib/config";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const DesktopNavigation = () => {
  const pathName = usePathname();
  return (
    <div className="flex gap-1 items-center">
      {navigationConfig.map(({ href, title, Icon }, index) => (
        <Button
          asChild
          variant="ghost"
          key={index}
          className={cn("", {
            "text-primary": pathName === href,
          })}
        >
          <Link href={href}>
            <Icon />
            {title}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default DesktopNavigation;
