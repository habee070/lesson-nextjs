// 4. Navbar Component
// - ใช้ Children และ Props เพื่อเพิ่มลิงก์แบบ Dynamic

import React from "react";

type NavbarProps = {
  links: { label: string; href: string }[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      {links.map((link, index) => (
        <a key={index} href={link.href} className="hover:underline">
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;