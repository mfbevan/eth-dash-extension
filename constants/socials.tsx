import { ReactNode } from "react";
import { BsGithub, BsGlobe, BsTwitter } from "react-icons/bs";

const ICON_SIZE = 30;

interface ISocials {
  label: string;
  link: string;
  icon: ReactNode;
}

export const socials: ISocials[] = [
  {
    label: "ethdash.xyz",
    link: "https://www.ethdash.xyz",
    icon: <BsGlobe size={ICON_SIZE} />,
  },
  {
    label: "eth-dash",
    link: "https://github.com/mfbevan/eth-dash",
    icon: <BsGithub size={ICON_SIZE} />,
  },
  {
    label: "eth-dash-extension",
    link: "https://github.com/mfbevan/eth-dash-extension",
    icon: <BsGithub size={ICON_SIZE} />,
  },
  {
    label: "@mfbevan",
    link: "https://twitter.com/mfbevan",
    icon: <BsTwitter size={ICON_SIZE} />,
  },
];
