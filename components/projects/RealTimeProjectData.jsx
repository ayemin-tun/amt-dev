const RealTimeProjectData = () => {
  return [
    {
      index: 1,
      name: "LinBlock",
      image: "/projects/linblock.png",
      description:
        "The LinBlock Concert Company website showcases products and other functionalities such as FAQs and contact options.",
      detail:
        "This is LinBlock Concert Company website. On the client side, users can search for Products, Send Contact , show FAQ and other functionality. On the admin side, administrators can add, delete, search, and edit products. Using Laravel Filament for the admin panel, admins can manage roles and permissions for users who log in to the admin dashboard and other functionality.",
      Language: [
        "HTML",
        "Css",
        "Javascript",
        "Tailwind",
        "Astro.js",
        "Laravel",
        "Filament",
        "Mysql",
      ],
      githubLink: null,
      demoLink: "https://linblock.com/",
      adminLink: "https://admin.linblock.com/admin",
    },
    {
      index: 2,
      name: "Great Safe Payroll",
      image: "/projects/greatsafe.png",
      description:
        "Employee Payroll and Attendance System for Great Safe Security Company.",
      detail:
        "Implemented features for a security company website, facilitating employee attendance tracking (present, absent, leave, overtime) and automating salary calculations based on attendance.",
      Language: ["HTML", "Css", "Javascript", "Laravel", "Filalment", "Mysql"],
      githubLink: null,
      demoLink: "https://greatsavepayroll.com",
      adminLink: null,
    },
    {
      index: 3,
      name: "MTF",
      image: "/projects/mtf.png",
      description: "Myanmar Tennis Federation, court booking website.",
      detail:
        "Tennis Court Booking Website for Myanmar Tennis Federation. Users can book courts, timeslots, coaches, facilities, etc. Users can also make booking payments through KBZPay Payment. In the Admin site, the admin can add, remove, and edit data for each item. Additionally, the system will display whether a booking is booked or expired based on specific business logic, along with other functionalities",
      Language: [
        "HTML",
        "Css",
        "Javascript",
        "Tailwind",
        "Next js(front end)",
        "laravel",
        "Filament(backend)",
        "Mysql",
      ],
      githubLink: null,
      demoLink: "https://myanmartennisfed.com",
      adminLink: "http://admin.myanmartennisfed.com/admin/login",
    },
  ];
};

export default RealTimeProjectData;
