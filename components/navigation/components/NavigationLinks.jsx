import Link from "next/link";

const NavigationLinks = () => {
  const links = [
    {
      title: "Home",
      path: "/",
      id: "home",
    },
    {
      title: "About",
      path: "/#about",
      id: "about",
    },
    {
      title: "Skills",
      path: "/#skills",
      id: "skills",
    },
    {
      title: "Projects",
      path: "/#projects",
      id: "projects",
    },
    // {
    //   title: "Contact",
    //   path: "/#contact",
    //   id: "contact",
    // },
  ];
  return (
    <>
      {links.map((link, index) => (
        <Link key={index} href={link.path} className="active" to={link.id}>
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default NavigationLinks;
