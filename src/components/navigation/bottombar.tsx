import { Separator } from "../ui/separator";
import MobileNavigation from "./mobile-navigation";

const BottomBar = () => {
  return (
    <div className="md:hidden">
      <Separator />
      <div className="flex w-full justify-evenly items-center my-2.5">
        <MobileNavigation />
      </div>
    </div>
  );
};

export default BottomBar;
