/* 1. ติดตั้ง Dependencies
npm install react-hook-form @hookform/resolvers zod

2. โครงสร้างโปรเจค
/app
 ├── /components
 │    ├── Form.tsx
 │    ├── Input.tsx
 ├── /app
 │    ├── page.tsx
 ├── /types
 │    ├── formSchema.ts 

 สรุป
Form Handling ใช้ useForm() จาก react-hook-form
Validation ใช้ Zod ร่วมกับ zodResolver
Input Component รองรับ ref และ error message
Next.js 15 (App Router) รองรับการใช้งาน client component ("use client")
 
 
 */

import Form from '@/components/forms/Form'
import React from 'react'

export default function Lesson7Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Form />
        </div>
    )
}
