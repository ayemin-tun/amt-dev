import NavigationLinks from "./NavigationLinks";

const FixedNavigation = () => {
    return (
      <div className="fixed z-10 w-full p-3 flex justify-between">
        <div className="bg-green-300">Hello</div>
        <div className="flex gap-3 text-white">
         <NavigationLinks/>
        </div>
        <div className="bg-green-700">dark/light</div>
      </div>
    );
  };
export default FixedNavigation;