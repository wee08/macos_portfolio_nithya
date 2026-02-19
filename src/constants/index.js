const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Dec 2, 2025",
    title: "Agency AI portfolio project",
    image: "/images/blog1.ico",
    link: "#",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Hotel Booking Landing page",
    image: "/images/blog2.svg",
    link: "#",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js"],
  },

  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },

  {
    category: "Dev Tools",
    items: ["GitHub", "vs code"],
  },
  {
    category: "Add On",
    items: ["C/C++"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/wee08",
  },
  {
    id: 2,
    text: "Upwork",
    icon: "/icons/upwork.svg",
    bg: "#4bcb63",
    link: "https://www.upwork.com/freelancers/~0113d07c287fbe066a?viewMode=1",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#ff866b",
    link: "https://www.instagram.com/manut_0820/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://kh.linkedin.com/in/sean-manutnithya-855169380",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/manut-1.png",
  },
  {
    id: 2,
    img: "/images/manut-2.png",
  },
  {
    id: 3,
    img: "/images/manut-3.png",
  },
  {
    id: 4,
    img: "/images/manut-4.png",
  },
  {
    id: 5,
    img: "/images/manut-1.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    // {
    //   id: 5,
    //   name: "Ecommerce site",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-10 left-5", // icon position inside Finder
    //   windowPosition: "top-[5vh] left-5", // optional: Finder window position
    //   children: [
    //     {
    //       id: 1,
    //       name: "Nithya Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 left-10",
    //       description: [
    //         "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
    //         "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
    //         "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
    //         "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "nike.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
    //       position: "top-10 right-20",
    //     },
    //     {
    //       id: 4,
    //       name: "nike.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 right-80",
    //       imageUrl: "/images/project-1.png",
    //     },
    //   ],
    // },

    // ▶ Project 2
    {
      id: 6,
      name: "Hotel booking site",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "hotel-booking Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Hotel booking site is a modern, responsive frontend page designed with a clean and user-friendly layout.",
            "It highlights key hotel features, room options, and booking interface for a smooth browsing experience.",
            "The design prioritizes clarity, easy navigation, and visually appealing sections to help users explore and book with confidence.",
            "Built with HTML, CSS, and JavaScript, the interface adapts across devices and looks polished on both desktop and mobile.",
          ],
        },
        {
          id: 2,
          name: "hotel-booking",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://wee08.github.io/hotel-booking/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "hotel-booking.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/hotel-booking.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Agency AI site",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Agency.ai Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Agency.AI is a clean, modern frontend landing page built to showcase an AI agency or service with a professional, engaging layout.",
            "The design highlights key features and offerings with smooth section transitions and intuitive navigation.",
            "It emphasizes visually appealing UI elements, clear typography, and responsive layout for an accessible user experience.",
            "Built with HTML, CSS, and JavaScript, the interface adapts well across desktop and mobile screens.",
          ],
        },
        {
          id: 2,
          name: "Agency.ai",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://wee08.github.io/Agency-ai/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "agency.ai.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/agencyai.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/manut-1.png",
    },
    {
      id: 2,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/manut-2.png",
    },
    {
      id: 3,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/manut-3.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-40 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/manut-4.png",
      description: [
        "Hey! I'm Nithya 👋 — a Frontend Developer who loves building sleek, interactive websites that people genuinely enjoy using.",
        "I work primarily with JavaScript and React, creating smooth, responsive experiences with attention to detail.",
        "I'm passionate about clean UI, meaningful UX, and writing code that's clear, organized, and future-proof.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
