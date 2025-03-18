// 3. Modal Component
// - ใช้ Props สำหรับเปิด/ปิด Modal

/* ✅ คุณสมบัติของ Modal Component

รับ Props isOpen → ใช้เปิด/ปิด Modal
รับ Props onClose → ใช้ปิด Modal เมื่อกดปุ่ม ✖
รองรับ children → สามารถใส่เนื้อหาใดๆ ใน Modal ได้ เช่น ฟอร์ม, ข้อความ หรือรูปภาพ */

import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;