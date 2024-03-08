import Link from "next/link";

const NavigationLinks = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/#about",
    },
    {
      title:"Skills",
      path: '/#skills'
    },
    {
      title: "Projects",
      path: "/#projects",
    },
    {
      title: "Contact",
      path: "/#contact",
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
