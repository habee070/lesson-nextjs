import api from "@/lib/api";
import { ApiResponse } from "@/types/api";
import { User } from "@/types/user";

// 🔸 ดึงข้อมูลผู้ใช้ทั้งหมด
export const getUsers = async (): Promise<User[]> => {
    const response = await api.get(`student`);
    return response.data;
};

/* 
แบบบมี params 
export const getUser = async (empCode?: string): Promise<ApiResponse<User[]>> => {
    const response = await api.get("student/",{
        params:{
            empCode:empCode
        }
    });

    return response.data;
  }; */

  
/* export const getUser = async (empCode?: string): Promise<ApiResponse<User[]>> => {
    const response = await api.get(`student/${empCode}`,{
        params:{
            empCode:empCode
        }
    });

    return response.data;
  }; */


// 🔸 เพิ่มผู้ใช้ (พร้อมอัปโหลดรูป)
export const createUser = async (user: User) => {
    const formData = new FormData();
    formData.append("EmployeeID", user.employeeID);
    formData.append("EmployeeCode", user.employeeCode);
    formData.append("FullName", user.fullName);
    formData.append("DepartmentName", user.departmentName);
    formData.append("RoleName", user.roleName);


    /* if (user.avatar instanceof File) {
        formData.append("avatar", user.avatar);
    } */

    const response = await api.post("/student", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });


    return response.data;
};

// 🔸 แก้ไขข้อมูลผู้ใช้
export const updateUser = async (id: string, user: User) => {
    const formData = new FormData();
    formData.append("EmployeeID", user.employeeID);
    formData.append("EmployeeCode", user.employeeCode);
    formData.append("FullName", user.fullName);
    formData.append("DepartmentName", user.departmentName);
    formData.append("RoleName", user.roleName);

    const response = await api.put(`/student`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
};

// 🔸 ลบผู้ใช้
export const deleteUser = async (id: string) => {
    const response = await api.delete(`/student/${id}`);
    return response.data;
};