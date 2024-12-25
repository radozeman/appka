import MobileNavigation from "./mobile-navigation";

const BottomBar = () => {
  return (
    <div className="md:hidden bg-gradient-to-t from-secondary/80 pb-2 pt-4">
      <div className="flex w-full justify-evenly items-center">
        <MobileNavigation />
      </div>
    </div>
  );
};

export default BottomBar;
