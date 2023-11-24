import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiPython,
  SiAdobephotoshop,
  SiTableau,
  SiMysql
} from "react-icons/si";

const iconSize = 24;

export const PROJECTSLISTS = [
  {
    id: 4,
    title: "portfolio-v1",
    description:
      "Personal website and portfolio built with Next Js, Javascript and Tailwind CSS",
    slug: "port-v1",
    link_demo: "https://renaldidwi.vercel.app",
    link_github: "https://github.com/renal-d/",
    tech_stack: [
      {
        title: "Nextjs",
        icon: <SiNextdotjs size={iconSize} />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      },
      {
        title: "Javascript",
        icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
      },
      {
        title: "Framer",
        icon: <SiFramer size={iconSize} />,
      },
    ],

    tooltip: ["Next.js", "Tailwind CSS", "Javascript", "Framer Motion"],
    aos_delay: 200,

    image:
      "https://res.cloudinary.com/dmmbiqyub/image/upload/v1700837124/renal_port_huci6t.png",
    is_show: true,
    is_featured: true,
    params: {
      slug: "port-v1",
    },
  },
  {
    id: 3,
    title: "Parallax",
    description:
      "Personal landing page built with Next.js Parallax  ",
    slug: "parallax",
    link_demo: "",
    link_github: "https://github.com/renal-d",
    tech_stack: [
      {
        title: "Nextjs",
        icon: <SiNextdotjs size={iconSize} />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      },
      {
        title: "Javascript",
        icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
      },
      {
        title: null,
        icon: null,
      },
    ],

    tooltip: ["Next.js", "Tailwind CSS", "Javascript"],
    aos_delay: 400,

    image:
      "https://res.cloudinary.com/dmmbiqyub/image/upload/v1700837125/parallax_uec9sf.png",
    is_show: true,
    is_featured: true,
    params: {
      slug: "parallax",
    },
  },
  {
    id: 2,
    title: "Data Science Project - Marketing",
    description: "Data Science portfolio built with python, MySQL, and Tableau",
    slug: "dspmarketing",
    link_demo: "https://v3reza.vercel.app",
    link_github: "https://github.com/ryznoxy/v3reza",
    tech_stack: [{
      title: "Python",
      icon: <SiPython size={iconSize} className="text-blue-500" />,
    },
    {
      title: "MySQL",
      icon: <SiMysql size={iconSize} className="text-orange-500" />,
    },
    {
      title: "Tableau",
      icon: <SiTableau size={iconSize} className="text-blue-500" />,
    },
    {
      title: null,
      icon: null,
    },
    ],
    
    tooltip: ["Python", "MySQL", "Tableau"],
    aos_delay: 600,
    image:
      "https://res.cloudinary.com/dmmbiqyub/image/upload/v1700837123/de_qyhx1l.jpg",
    is_show: true,
    is_featured: false,
    params: {
      slug: "dspmarketing",
    },
  },
  {
    id: 1,
    title: "AI Photo",
    description: "AI Photo RRQ Livi",
    slug: "aiphoto",
    link_demo: "https://v2portfolio.vercel.app/",
    link_github: "https://github.com/ryznoxy/v2portfolio",
    tech_stack: [ {
      title: "Photoshop",
      icon: <SiAdobephotoshop size={iconSize} className="text-blue-500" />,
    },
    {
      title: null,
      icon: null,
    },
    {
      title: null,
      icon: null,
    },
    {
      title: null,
      icon: null,
    },
    ],
    
    tooltip: ["Photoshop"],
    aos_delay: 800,
    image:
      "https://res.cloudinary.com/dmmbiqyub/image/upload/v1700837733/DreamShaper_v7_masterpiece_realistic_portrait_of_a_girl_beauti_0_ftktse.jpg",
    is_show: true,
    is_featured: false,
    params: {
      slug: "aiphoto",
    },
  },
];
