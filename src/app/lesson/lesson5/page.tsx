/* 
✅ Dynamic Routing ใน Next.js 15
Dynamic Routing ใน Next.js 15 ช่วยให้เราสร้างหน้าเพจที่เปลี่ยนแปลงได้ตามค่า ID 
หรือพารามิเตอร์ที่ได้รับจาก URL เช่น /products/1, /products/2 เป็นต้น

app/
│── products/
│   ├── [id]/
│   │   ├── page.tsx  <-- ไฟล์ Dynamic Route
│   ├── page.tsx       <-- หน้า Products รวม 

app/products/page.tsx → เป็นหน้ารวมของสินค้าทั้งหมด
app/products/[id]/page.tsx → เป็นหน้าแสดงรายละเอียดสินค้าโดย id มาจาก URL


*/

// app/products/page.tsx
import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Lesson5Page() {
  const products = await getProducts();

  return (
    <div>
      <h1>สินค้าทั้งหมด</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <Link href={`/lesson5/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}