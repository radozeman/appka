import { navigationConfig } from "@/lib/config";
import NavigationItem from "./navigation-item";

const MobileNavigation = () => {
  return (
    <div className="flex w-full justify-evenly items-center">
      {navigationConfig.map(({ href, title, Icon }, index) => (
        <NavigationItem key={index} href={href} title={title} Icon={Icon} />
      ))}
    </div>
  );
};

export default MobileNavigation;
