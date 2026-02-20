import wifiIcon from "../../public/icons/wifi.svg";
import searchIcon from "../../public/icons/search.svg";
import userIcon from "../../public/icons/user.svg";
import modeIcon from "../../public/icons/mode.svg";

import finder from "../../public/images/finder.png";
import safari from "../../public/images/safari.png";
import photos from "../../public/images/photos.png";
import contact from "../../public/images/contact.png";
import terminal from "../../public/images/terminal.png";
import trash from "../../public/images/trash.png";

import github from "../../public/icons/github.svg";
import upwork from "../../public/icons/upwork.svg";
import instagram from "../../public/icons/instagram.svg";
import linkedin from "../../public/icons/linkedin.svg";

import manut1 from "../../public/images/manut-1.png";
import manut2 from "../../public/images/manut-2.png";
import manut3 from "../../public/images/manut-3.png";
import manut4 from "../../public/images/manut-4.png";
import manut5 from "../../public/images/manut-5.png";

import blog1 from "../../public/images/blog1.ico";
import blog2 from "../../public/images/blog2.svg";

import gicon1 from "../../public/icons/gicon1.svg";
import fileIcon from "../../public/icons/file.svg";
import gicon2 from "../../public/icons/gicon2.svg";
import gicon4 from "../../public/icons/gicon4.svg";
import gicon5 from "../../public/icons/gicon5.svg";

import workLocation from "../../public/icons/work.svg";

import infoIcon from "../../public/icons/info.svg";
import image from "../../public/images/image.png";
import txt from "../../public/images/txt.png";

import pdf from "../../public/images/pdf.png";
import trash1 from "../../public/images/trash-1.png";
import trash2 from "../../public/images/trash-2.png";
import folder from "../../public/images/folder.png";
import hotelbooking from "../../public/images/hotel-booking.png";
import agencyai from "../../public/images/agencyai.png";
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
    img: wifiIcon,
  },
  {
    id: 2,
    img: searchIcon,
  },
  {
    id: 3,
    img: userIcon,
  },
  {
    id: 4,
    img: modeIcon,
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: finder,
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: safari,
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: photos,
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: contact,
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: terminal,
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: trash,
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Dec 2, 2025",
    title: "Agency AI portfolio project",
    image: blog1,
    link: "#",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Hotel Booking Landing page",
    image: blog2,
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
    icon: github,
    bg: "#f4656b",
    link: "https://github.com/wee08",
  },
  {
    id: 2,
    text: "Upwork",
    icon: upwork,
    bg: "#4bcb63",
    link: "https://www.upwork.com/freelancers/~0113d07c287fbe066a?viewMode=1",
  },
  {
    id: 3,
    text: "Instagram",
    icon: instagram,
    bg: "#ff866b",
    link: "https://www.instagram.com/manut_0820/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: linkedin,
    bg: "#05b6f6",
    link: "https://kh.linkedin.com/in/sean-manutnithya-855169380",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: gicon1,
    title: "Library",
  },
  {
    id: 2,
    icon: gicon2,
    title: "Memories",
  },
  {
    id: 3,
    icon: fileIcon,
    title: "Places",
  },
  {
    id: 4,
    icon: gicon4,
    title: "People",
  },
  {
    id: 5,
    icon: gicon5,
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: manut1,
  },
  {
    id: 2,
    img: manut2,
  },
  {
    id: 3,
    img: manut3,
  },
  {
    id: 4,
    img: manut4,
  },
  {
    id: 5,
    img: manut5,
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
  icon: workLocation,
  kind: "folder",
  children: [
    {
      id: 6,
      name: "Hotel booking site",
      icon: folder,
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "hotel-booking Project.txt",
          icon: txt,
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
          icon: safari,
          kind: "file",
          fileType: "url",
          href: "https://wee08.github.io/hotel-booking/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "hotel-booking.png",
          icon: image,
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: hotelbooking,
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Agency AI site",
      icon: folder,
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Agency.ai Project.txt",
          icon: txt,
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
          icon: safari,
          kind: "file",
          fileType: "url",
          href: "https://wee08.github.io/Agency-ai/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "agency.ai.png",
          icon: image,
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: agencyai,
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: infoIcon,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: image,
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: manut1,
    },
    {
      id: 2,
      name: "me.png",
      icon: image,
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: manut2,
    },
    {
      id: 3,
      name: "me.png",
      icon: image,
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: manut3,
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: txt,
      kind: "file",
      fileType: "txt",
      position: "top-40 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: manut4,
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
  icon: fileIcon,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: pdf,
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
  icon: trash,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: image,
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: trash1,
    },
    {
      id: 2,
      name: "trash2.png",
      icon: image,
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: trash2,
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
