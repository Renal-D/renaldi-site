import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiPython,
  SiAdobephotoshop,
  SiTableau,
  SiMysql,
  SiGooglebigquery,
  SiAdobelightroom,
  SiTensorflow
} from "react-icons/si";

const iconSize = 24;
export const PROJECTSLISTS = [
  {
    id: 6,
    title: "Data Science-Bisnis Esports di Indonesia",
    description: "Soon Soon Soon Soon Soon Soon Soon Soon Soon Soon",
    slug: "dsp-business",
    view_project: "",
    link_github: "https://github.com/Renal-D",
    tech_stack: [{
      title: "Python",
      icon: <SiPython size={iconSize} className="text-blue-500"/>,
    },
    {
      title: "MySQL",
      icon: <SiMysql size={iconSize} className="text-orange-500"/>,
    },
    {
      title: "Big Query",
      icon: <SiGooglebigquery size={iconSize} className="text-blue-500"/>,
    },
    {
      title: "Tensor Flow",
      icon: <SiTensorflow size={iconSize} className="text-orange-600"/>,
    },
    ],
    
    tooltip: ["Python","MySQL","Big Query","Tensor Flow"],
    aos_delay: 600,
    image:
      "https://res.cloudinary.com/dmmbiqyub/image/upload/v1701924641/sunny_yn51np.webp",
    is_show: true,
    is_featured: true,
    params: {
      slug: "dsp-business",
    },
  },
  {
    id: 5,
    title: "Data Science Project - Games Sales",
    description: "Data Science portfolio built with Python, MySQL, and Big Query",
    slug: "dspmarketing",
    view_project: "https://github.com/Renal-D/games_sales/blob/main/RevoU_CaseStudy_RR.pptx",
    link_github: "https://github.com/Renal-D/games_sales",
    tech_stack: [{
      title: "Python",
      icon: <SiPython size={iconSize} className="text-blue-500"/>,
    },
    {
      title: "MySQL",
      icon: <SiMysql size={iconSize} className="text-orange-500"/>,
    },
    {
      title: "Tableau",
      icon: <SiTableau size={iconSize} className="text-blue-800"/>,
    },
    {
      title: null,
      icon: null,
    },
    ],
    
    tooltip: ["Python","MySQL","Tableau"],
    aos_delay: 600,
    image:
      "https://res.cloudinary.com/dmmbiqyub/image/upload/v1701924642/quinnie_se4tbh.webp",
    is_show: true,
    is_featured: true,
    params: {
      slug: "dspmarketing",
    },
  },
  {
    id: 4,
    title: "portfolio-v1",
    description:
      "Personal website and portfolio built with Next Js, Javascript and Tailwind CSS",
    slug: "port-v1",
    view_project: "https://renaldidwi.vercel.app",
    link_github: "https://github.com/Renal-D/portfolio",
    tech_stack: [{
        title: "Nextjs",
        icon: <SiNextdotjs size={iconSize}/>,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss size={iconSize} className="text-cyan-300"/>,
      },
      {
        title: "Javascript",
        icon: <SiJavascript size={iconSize} className="text-yellow-400"/>,
      },
      {
        title: "Framer",
        icon: <SiFramer size={iconSize}/>,
      },
    ],

    tooltip: ["Next.js","Tailwind CSS","Javascript","Framer Motion"],
    aos_delay: 200,

    image:
      "https://res.cloudinary.com/dmmbiqyub/image/upload/v1701924641/carmine1_ukz1br.webp",
    is_show: true,
    is_featured: false,
    params: {
      slug: "port-v1",
    },
  },
  {
    id: 3,
    title: "Parallax",
    description:
      "Personal landing page built with Next.js - Parallax Project",
    slug: "parallax",
    view_project: "",
    link_github: "https://github.com/renal-d",
    tech_stack: [{
        title: "Nextjs",
        icon: <SiNextdotjs size={iconSize}/>,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss size={iconSize} className="text-cyan-300"/>,
      },
      {
        title: "Javascript",
        icon: <SiJavascript size={iconSize} className="text-yellow-400"/>,
      },
      {
        title: null,
        icon: null,
      },
    ],

    tooltip: ["Next.js","Tailwind CSS","Javascript"],
    aos_delay: 400,

    image:
      "https://res.cloudinary.com/dmmbiqyub/image/upload/v1701924641/YoRi_a0uhdd.webp",
    is_show: true,
    is_featured: false,
    params: {
      slug: "parallax",
    },
  },
  {
    id: 2,
    title: "AI Photo",
    description: "AI Photo RRQ Livi",
    slug: "aiphoto",
    view_project: "",
    link_github: "",
    tech_stack: [{
      title: "Photoshop",
      icon: <SiAdobephotoshop size={iconSize} className="text-blue-500"/>,
    },
    {
      title: "Lightroom",
      icon: <SiAdobelightroom size={iconSize} className="text-cyan-700"/>,
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
    
    tooltip: ["Photoshop","Lightroom"],
    aos_delay: 800,
    image:
      "https://res.cloudinary.com/dmmbiqyub/image/upload/v1701924645/tiffany_vv9nxh.webp",
    is_show: true,
    is_featured: false,
    params: {
      slug: "aiphoto",
    },
  },
  {
    id: 1,
    title: "Tes aja",
    description: "sekedar tes program",
    slug: "photo",
    view_project: "",
    link_github: "",
    tech_stack: [{
      title: "Photoshop",
      icon: <SiAdobephotoshop size={iconSize} className="text-blue-500"/>,
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
      "https://res.cloudinary.com/dmmbiqyub/image/upload/v1701924642/satine_ynuw4b.webp",
    is_show: true,
    is_featured: false,
    params: {
      slug: "photo",
    },
  },
];