"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialData = [
  {
    name: "GitHub",
    link: "https://github.com/Sbtech24",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/oluwasemilore-bajomo-3a7087247/",
    icon: FaLinkedin,
  },
  {
    name: "X (Twitter)",
    link: "https://x.com/BajomoSemilore",
    icon: FaXTwitter,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialData.map(({ name, link, icon: Icon }) => (
        <Link
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="border-2 border-black p-1 rounded-md hover:bg-gray-100 transition"
        >
          <Icon size={22} />
        </Link>
      ))}
    </div>
  );
}
