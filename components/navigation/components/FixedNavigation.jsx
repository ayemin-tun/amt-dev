import LightDarkToggle from "./LightDarkToogle";
import NavigationLinks from "./NavigationLinks";

const FixedNavigation = () => {
  return (
    <div className="px-10 fixed z-10 w-full py-6 flex justify-between">
      <div className="text-xl font-bold dark:text-white transition-colors duration-500">
        amt.dev
      </div>
      <div className="md:flex hidden gap-3 dark:text-white transition-colors duration-500">
        <NavigationLinks />
      </div>
      <div>
        <LightDarkToggle />
      </div>
    </div>
  );
};
export default FixedNavigation;
