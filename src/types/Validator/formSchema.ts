import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "ชื่ออย่างน้อย 3 ตัวอักษร"),
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง"),
  age: z.coerce.number().min(18, "อายุขั้นต่ำต้องเป็น 18 ปี"),
});

export type FormSchemaType = z.infer<typeof formSchema>;
