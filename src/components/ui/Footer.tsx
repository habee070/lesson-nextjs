// 5. Footer Component
// - ใช้ Props และ Children

import React from "react";

type FooterProps = {
  children?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <footer className="bg-gray-900 text-white p-4 text-center">{children}</footer>;
};

export default Footer;