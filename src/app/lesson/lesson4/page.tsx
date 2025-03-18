import Link from 'next/link'
import React from 'react'

export default function Lesson4Page() {
  return (
    <>
    <ul>
            <li><Link href="/">🏠 หน้าหลัก</Link></li>
            <li><Link href="/lesson/lesson1">บทที่ 1</Link></li>
            <li><Link href="/lesson/lesson2">บทที่ 2</Link></li>
            <li><Link href="/lesson/lesson3">บทที่ 3</Link></li>
            <li><Link href="/lesson/lesson4">บทที่ 4</Link></li>
          </ul>
    </>
  )
}
