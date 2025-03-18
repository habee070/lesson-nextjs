"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchemaType } from "@/types/Validator/formSchema";
import Input from "../ui/Input";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchemaType) => {
    console.log("ส่งข้อมูล:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded-lg w-96">
      <h2 className="text-xl font-semibold">แบบฟอร์มสมัครสมาชิก</h2>

      <Input label="ชื่อ" {...register("name")} error={errors.name?.message} />
      <Input label="อีเมล" type="email" {...register("email")} error={errors.email?.message} />
      <Input label="อายุ" type="number" {...register("age")} error={errors.age?.message} />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        ส่งข้อมูล
      </button>
    </form>
  );
}
