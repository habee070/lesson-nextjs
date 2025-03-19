//2️⃣ React Hooks: useState, useEffect
import React from 'react'
import Lesson1Page from '../lesson1/page'

export default function Lesson2Page() {
  return (
    <>
    บทเรียนที่ 2
    <Lesson1Page initialValue={10} />
    <hr />
    <Lesson1Page initialValue={50} />
    </>
  )
}

/* ✅ อธิบาย

นำเข้า Component Counter
ใช้ Props กำหนดค่าเริ่มต้นเป็น 10 */