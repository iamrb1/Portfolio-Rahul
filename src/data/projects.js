import Ahoy from "../assets/portfolio/Ahoy.jpg";
import LocoListen from "../assets/portfolio/LocoListen.jpg";
export const projects = [
  {
    id: 1,
    title: "Ecosnap",
    description:
      "Android app that uses Google Vision API to determine item recyclability from camera photos. Features Firebase backend, Google OAuth auth, and a global gamified leaderboard.",
    image: null,
    gradient: "from-stone-600 to-stone-900",
    icon: null,
    tags: ["Java", "Firebase", "Google OAuth", "Vision API", "Android"],
    demo: null,
    code: "https://github.com/iamrb1",
    featured: true,
  },
  {
    id: 2,
    title: "Compartmental Modeling System",
    video: "/videos/compartmental-modeling.mp4",
    poster: "/images/compartmental-modeling-poster.jpg",
    description:
      "Graphical C++/Qt simulation system for creating compartment-based models with customizable differential-equation transfer dynamics, real-time graphing, and data export. Cross-platform.",
    image: null,
    gradient: "from-zinc-600 to-zinc-900",
    icon: null,
    tags: ["C++", "Qt", "GUI", "Simulation", "Cross-platform"],
    demo: null,
    code: "https://github.com/iamrb1",
    featured: true,
  },
  {
    id: 3,
    title: "Ahoy",
    description:
      "Real-time messenger app with a modern UI built for seamless instant communication. Powered by Pusher for live messaging.",
    image: Ahoy,
    gradient: null,
    icon: null,
    tags: ["React", "Node.js", "Pusher", "Tailwind CSS"],
    demo: "https://messenger-three-beta.vercel.app/",
    code: "https://github.com/iamrb1/Ahoy",
    featured: false,
  },
  {
    id: 4,
    title: "LocoListen",
    description:
      "SpartaHack 8 project: a location-based music discovery app connecting people with local music culture in real time.",
    image: LocoListen,
    gradient: null,
    icon: null,
    tags: ["React", "REST API", "Hackathon"],
    demo: "https://devpost.com/software/locolisten",
    code: "https://github.com/iamrb1/LocoListen-Spartahack8",
    featured: false,
  },
];
