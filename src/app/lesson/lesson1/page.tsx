
//1️⃣ React Components: Functional Components, Props, State
// components/Counter.tsx
"use client"; // ใช้ใน Next.js 15 สำหรับ Components ที่มี State และ Effect

import React, { use, useEffect, useState } from 'react'

type CounterProps = {
    initialValue?: number
}

export default function Lesson1Page({ initialValue = 0 }: CounterProps) {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        console.log('Counter Updated:', count)
    }, [count])

    return (
        <>

            <div>บทเรียนที่ 1</div>
            <div>
                <h2>Counter: {count}</h2>
                <button onClick={() => setCount(count + 1)}>➕ เพิ่ม</button>
                <button onClick={() => setCount(count - 1)}>➖ ลด</button>
            </div>
        </>
    )
}

/* ✅ อธิบาย

ใช้ useState เก็บค่าตัวเลข (State)
ใช้ useEffect แสดงค่าใหม่เมื่อ State เปลี่ยน
มี Props initialValue เพื่อกำหนดค่าเริ่มต้น */

/* useState เป็น Hook ใน React ที่ใช้สำหรับจัดการ state ภายใน Functional Component 
ซึ่งช่วยให้เราสามารถเก็บและอัปเดตค่าต่าง ๆ ได้โดยไม่ต้องใช้ Class Component */

/* สรุป
useState ใช้สำหรับจัดการ state ใน Functional Component
คืนค่าเป็น [state, setState]
ใช้กับ Primitive, Object, และ Array ได้
ใช้ Callback ใน setState เพื่ออัปเดตค่าจากค่าปัจจุบัน */

/* useEffect เป็น Hook ใน React ที่ใช้จัดการ Side Effects ในฟังก์ชันคอมโพเนนต์ เ
ช่น การดึงข้อมูลจาก API, การตั้งค่า Subscription, การอัปเดต DOM และอื่น ๆ */

/* 🔥 สรุป useEffect
วิธีใช้	ทำงานเมื่อไหร่	เหมาะสำหรับ
useEffect(() => {...}, [])	ครั้งแรกที่คอมโพเนนต์เรนเดอร์	เรียก API, ตั้งค่าเริ่มต้น
useEffect(() => {...}, [dependency])	เมื่อ dependency เปลี่ยนแปลง	ติดตามค่าต่างๆ, คำนวณใหม่
useEffect(() => {...})	ทุกครั้งที่คอมโพเนนต์เรนเดอร์	หลีกเลี่ยงถ้าไม่จำเป็น
useEffect(() => { return () => {...} }, [])	Cleanup ก่อนคอมโพเนนต์ถูกลบ	ยกเลิก Event Listener, ยกเลิก setInterval */



