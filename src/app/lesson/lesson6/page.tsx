"use client";
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Footer from '@/components/ui/Footer';
import Modal from '@/components/ui/Modal';
import Navbar from '@/components/ui/Navbar';
import { useState } from 'react';

export default function Lesson6Page() {

    const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Navbar links={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      <div className="p-6">
        <Card title="Welcome to Next.js 15!">
          <p>ทดสอบ</p>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        </Card>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-lg font-semibold">Modal Title</h2>
        <p>This is the modal content.</p>
      </Modal>
      <Footer>&copy; 2025 Your Company</Footer>
    </div>
  )
}

/* 🔄 Reusable Components คืออะไร?
Reusable Components หรือ คอมโพเนนต์ที่นำกลับมาใช้ซ้ำได้ คือแนวคิดใน React และ Next.js 
ที่ช่วยให้เราสร้าง UI Component ที่สามารถใช้ได้หลายครั้งโดยไม่ต้องเขียนโค้ดใหม่ทุกครั้ง 
ซึ่งช่วยให้โค้ดสะอาด, ง่ายต่อการบำรุงรักษา และลดความซ้ำซ้อน 

ทำไมต้องใช้ Reusable Components?
 1 ลดความซ้ำซ้อน (DRY - Don't Repeat Yourself)
    แทนที่จะเขียนโค้ดซ้ำๆ ในแต่ละไฟล์ เราสามารถสร้าง Component หนึ่งครั้ง แล้วใช้ซ้ำได้หลายที่
 2 ง่ายต่อการบำรุงรักษา
    ถ้าต้องการเปลี่ยนแปลง UI หรือฟังก์ชันการทำงาน แก้ไขแค่ที่เดียว Component ทั้งหมดที่ใช้ก็จะเปลี่ยนตาม
 3 เพิ่มความสามารถในการจัดการโค้ด
    โค้ดที่มีโครงสร้างชัดเจน เข้าใจง่าย และรองรับการขยายระบบได้ดี
 4 ทำให้การพัฒนาเร็วขึ้น
    นักพัฒนาสามารถนำ Component เดิมมาใช้ซ้ำได้โดยไม่ต้องสร้างใหม่

🔧 โครงสร้างของ Reusable Components
Reusable Components ควรมี: ✅ Props → ใช้ส่งค่าจาก Component หนึ่งไปยังอีก Component
✅ Children → ทำให้ Component มีความยืดหยุ่น รองรับเนื้อหาที่เปลี่ยนแปลงได้
✅ Styling แยกต่างหาก → ใช้ Tailwind CSS หรือ Styled Components เพื่อให้โค้ดสะอาด
✅ Event Handlers → รองรับการทำงานแบบโต้ตอบ เช่น onClick, onChange  

*/
