/* 3️⃣ Event Handling & Form Handling */
"use client";
import React, { useState } from 'react'

export default function Lesson3Page() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`📩 ส่งข้อความจาก: ${name}\nเนื้อหา: ${message}`);
    };

    return (
        <>
            บทเรียนที่ 3
            <h1>📞 ติดต่อเรา</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    ชื่อ:
                    <input
                        className='mr-3 border-2 border-solid'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    ข้อความ:
                    <textarea
                        className='mr-3 border-2 border-solid'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                </label>
                <button 
                className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                type="submit"
                >ส่งข้อความ</button>
            </form>
        </>
    )
}

/* ✅ อธิบาย

ใช้ useState เก็บค่าฟอร์ม (name, message)
ใช้ onChange อัปเดตค่าเมื่อพิมพ์
ใช้ onSubmit ดักจับเหตุการณ์กดปุ่ม ส่งข้อมูล */
