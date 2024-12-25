import MobileNavigation from "./mobile-navigation";

const BottomBar = () => {
  return (
    <div className="md:hidden">
      <div className="flex w-full justify-evenly items-center">
        <MobileNavigation />
      </div>
    </div>
  );
};

export default BottomBar;
