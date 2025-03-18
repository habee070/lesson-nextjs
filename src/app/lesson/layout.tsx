/* 4️⃣ React Router (พื้นฐานของ Navigation) */
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Lesson",
  description: "บนเรียน next js",
};

export default function LessonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
