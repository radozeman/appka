"use client";
import { navigationConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavigation = () => {
  const pathName = usePathname();
  return (
    <div className="flex w-full justify-evenly items-center">
      {navigationConfig.map(({ href, Icon }, index) => {
        if (href === "/create") {
          return (
            <Link
              key={index}
              href={href}
              className="rounded-full text-white bg-primary p-2.5"
            >
              <Icon className="size-6 stroke-[3px]" />
            </Link>
          );
        }
        return (
          <Link key={index} href={href}>
            <Icon
              className={cn("size-6", {
                "text-primary": pathName === href,
              })}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNavigation;
