import Link from "next/link";

const NavigationLinks = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/",
    },
    {
      title: "Projects",
      path: "/",
    },
    {
      title: "Contact",
      path: "/",
    },
  ];
  return (
    <>
      {links.map((link, index) => (
        <Link key={index} href={link.path}>
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default NavigationLinks;
