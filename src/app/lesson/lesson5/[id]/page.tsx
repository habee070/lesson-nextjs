// app/products/[id]/page.tsx
import { notFound } from "next/navigation";

async function getProduct(id: string) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!res.ok) {
            console.error("Product not found:", id);
            return null; // ดักจับ error ถ้า API ส่ง 404
        }

        return await res.json();
    } catch (error) {
        console.error("Fetch Error:", error);
        return null; // ถ้ามีปัญหาจะไม่ให้แอปพัง
    }
}

export default async function Lesson5Page({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);

    if (!product) return notFound(); // ถ้าหาไม่เจอ ให้ไปหน้า 404

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>💰 ราคา: ${product.price}</p>
            <img src={product.image} alt={product.title} width={200} />
        </div>
    );
}