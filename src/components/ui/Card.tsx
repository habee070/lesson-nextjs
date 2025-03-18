// 2. Card Component
// - ใช้ Props และ Children เพื่อทำให้เป็น Reusable Component

/* ✅ คุณสมบัติของ Card Component

รับ Props title → ใช้กำหนดหัวข้อของการ์ด
รองรับ children → สามารถใส่เนื้อหาภายในการ์ดได้ เช่น ปุ่ม, ข้อความ หรือรูปภาพ */

import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
