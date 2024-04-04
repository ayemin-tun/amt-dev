const ProjectData = () => {
  return [
    {
      index: 1,
      name: "Nyanpasu Music",
      image: "/projects/nyanpasu_music.png",
      description:
        "This is a website where you can discover,enjoy and request translated music video that is associated with anime.",
      detail:
        "This is my first fully functional website, dedicated to uploading songs associated with anime. On the client side, users can search for music, listen to it, download their favorite tracks, and even request songs from the admin. On the admin side, administrators can add, delete, search, and edit songs. Additionally, they can review and manage song requests submitted by users.",
      Language: ["HTML", "Css", "Javascript", "Bootstrap", "PHP", "MySql"],
      githubLink: "https://github.com/ayemin-tun/nyanpasu_music",
      demoLink: "http://nyanpasumusic.epizy.com",
      adminLink:
        "http://nyanpasumusic.epizy.com/include_nyanpasu_admin/admin.php",
    },
    {
      index: 2,
      name: "Real Chat",
      image: "/projects/noProject.png",
      description:
        "This is a real-time chat application that enables users to engage in instant communication with one another. ",
      detail:
        "This is a real-time chat application that enables users to engage in instant communication with one another.This chat application provides a seamless and responsive user experience across various devices, including desktops, laptops, tablets, and mobile phones.",
      Language: [
        "HTML",
        "Css",
        "Javascript",
        "Bootstrap",
        "Ajax",
        "Php(pure)",
        "Mysql",
      ],
      githubLink: "https://github.com/ayemin-tun/realchat",
      demoLink: null,
    },
    {
      index: 3,
      name: "HiChat",
      image: "/projects/hichat.png",
      description:
        "This is a Polish version of the RealChat application built using Laravel and Livewire. In this application, users can access more functions and advanced features.",
      detail:
        "This is a real-time chat application that enables users to engage in instant communication with one another. Users can create accounts, log in, and connect with friends or other users in real-time chat rooms. Additionally, users can personalize their profiles and also manage their contacts.Built with cutting-edge technologies such as Laravel echo and pusher.js, this chat application provides a seamless and responsive user experience across various devices, including desktops, laptops, tablets, and mobile phones.",
      Language: [
        "HTML",
        "Css",
        "Javascript",
        "TailWind",
        "Alpine Js",
        "Laravel",
        "Livewire",
        "Mysql",
      ],
      githubLink: "https://github.com/ayemin-tun/HiChat",
      demoLink: null,
    },
    {
      index: 4,
      name: "Nyanpasu Music",
      image: "/projects/nyanpasu_music2.jpg",
      description:
        "This is also the Polish version of the Nyanpasu Music website, where you can discover, enjoy, and request translated music videos associated with anime. Additionally, it features a more attractive design and added more control functionality for admin.",
      detail:
        "This is music uploading songs associated with anime. On the client side, users can search for music, listen to it, download their favorite tracks, and even request songs from the admin. On the admin side, administrators can add, delete, search, and edit songs, as well as view requested music. Using Laravel Filament for the admin panel, admins can manage roles and permissions for users who log in to the admin dashboard and other functionality. (Some features are in the development state)",
      Language: [
        "HTML",
        "Css",
        "Javascript",
        "Tailwind",
        "Laravel",
        "Livewire",
        "Laravel(Filament)",
        "Mysql",
      ],
      githubLink: "https://github.com/ayemin-tun/nyanpasu_music_ver2",
      demoLink: null,
    },
  ];
};

export default ProjectData;
