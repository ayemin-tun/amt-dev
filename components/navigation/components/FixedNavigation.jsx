import NavigationLinks from "./NavigationLinks";

const FixedNavigation = () => {
    return (
      <div className="container mx-auto px-10 fixed z-10 w-full p-3 flex justify-between">
        <div className="text-xl font-bold">Hello</div>
        <div className="flex gap-3">
         <NavigationLinks/>
        </div>
        <div>
          lignt/dark
        </div>
      </div>
    );
  };
export default FixedNavigation;