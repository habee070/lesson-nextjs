// 1. Button Component
// - ใช้ Props เพื่อกำหนดประเภทของปุ่ม เช่น primary, secondary
// - รองรับ onClick event และ children

/* ✅ คุณสมบัติของ Button Component

รับ Props variant → ใช้กำหนดสีของปุ่ม (primary = ฟ้า, secondary = เทา)
รับ Props onClick → รองรับ Event เมื่อผู้ใช้กดปุ่ม
รองรับ children → สามารถกำหนดข้อความในปุ่มได้ */

import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", onClick, children }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;