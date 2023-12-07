import {
  SiTwitter,
  SiGithub,
  SiInstagram,
  SiTiktok,
  SiDiscord,
  SiLinkedin,
} from "react-icons/si";
const iconSize = 24;
export const CONTACTLIST = [
  {
    name: "Github",
    logo: <SiGithub size={iconSize}/>,
    href: "https://github.com/renal-d",
    color: 'bg-neutral-800',
  },
  {
    name: "Instagram",
    logo: <SiInstagram size={iconSize}/>,
    href: "https://www.instagram.com/renaldii06/",
    color: 'bg-pink-600',
  },
  {
    name: "Discord",
    logo: <SiDiscord size={iconSize}/>,
    href: "https://discord.com/users/701782875904933948",
    color: 'bg-blue-700',
  },
  {
    name: "Twitter",
    logo: <SiTwitter size={iconSize}/>,
    href: "https://www.twitter.com/@renaldii06",
    color: 'bg-blue-300',
  },
  {
    name: "Tiktok",
    logo: <SiTiktok size={iconSize}/>,
    href: "https://www.tiktok.com/@renmaruuqt",
    color: 'bg-neutral-800',
  },
  {
    name: "LinkedIn",
    logo: <SiLinkedin size={iconSize}/>,
    href: "https://www.linkedin.com/in/renaldidwi",
    color: 'bg-blue-500',
  },];
