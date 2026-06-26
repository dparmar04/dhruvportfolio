"use client";

import { House, User, Code, Briefcase, Folder, Envelope } from "@phosphor-icons/react";
import Dock from "../../components/reactbits/Dock";
import { useLenis } from "@/lib/lenis";

export default function DockNav() {
  const lenis = useLenis();

  const scrollTo = (id: string) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const iconSize = 20;
  const items = [
    { icon: <House size={iconSize} />, label: "Home", onClick: () => scrollTo("hero") },
    { icon: <User size={iconSize} />, label: "About", onClick: () => scrollTo("about") },
    { icon: <Code size={iconSize} />, label: "Skills", onClick: () => scrollTo("skills") },
    { icon: <Briefcase size={iconSize} />, label: "Work", onClick: () => scrollTo("experience") },
    { icon: <Folder size={iconSize} />, label: "Projects", onClick: () => scrollTo("projects") },
    { icon: <Envelope size={iconSize} />, label: "Contact", onClick: () => scrollTo("contact") },
  ];

  return <Dock items={items} panelHeight={60} baseItemSize={44} magnification={56} distance={150} />;
}
