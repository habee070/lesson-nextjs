//npm install zustand
import Layout from '@/components/store/Layout'
import React from 'react'

export default function page() {
  return (
    <>
   <Layout>
      <h1 className="text-2xl font-bold">Welcome to Next.js 15 with Zustand</h1>
      <p>This is the homepage.</p>
    </Layout>
    </>
  )
}

/* 
🎯 สรุป
Zustand เป็น state management library ที่ช่วยให้เราสามารถสร้าง Shared State ได้ง่ายๆ โดยไม่ต้องใช้ Context API หรือ Redux
Zustand Store เก็บ state ไว้ส่วนกลาง และ component ต่างๆ สามารถดึงข้อมูลหรืออัปเดต state ได้
State ที่ใช้ร่วมกัน เช่น UI state (Sidebar, Modal) จะทำงานได้สะดวกและประหยัดการ rerender กว่า Context API
การใช้งาน แค่ import { useUIStore } และเรียกใช้ค่า state หรือ function ที่กำหนดใน store
*/
