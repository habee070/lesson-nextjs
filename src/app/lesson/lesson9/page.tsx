/* 
1. ติดตั้ง axios npm install axios
2. สร้าง service สำหรับเรียก API
3. API Service สำหรับ User
4. สร้าง UI สำหรับจัดการ User 
*/

'use client'
import { createUser, deleteUser, getUsers, updateUser } from '@/services/userService';
import { User } from '@/types/user';
import React, { useEffect, useState } from 'react'

export default function Lesson9() {

    const [users, setUsers] = useState<User[]>([]);
    //const [newUser, setNewUser] = useState<User>({ name: "", email: "", avatar: undefined });

    const [newUser, setNewUser] = useState<User>({
        employeeID: "",
        employeeCode: "",
        fullName: "",
        departmentName: "",
        roleName: ""
    });

    const [upUser,setUpUser] = useState<User>({
        employeeID: "",
        employeeCode: "",
        fullName: "",
        departmentName: "",
        roleName: ""
    });

    /*    export interface User {
           employeeID: string ;
           employeeCode: string ;
           fullName: string ;
           departmentName: string ;
           roleName: string ;
         } */

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await getUsers();
        console.log(data);
        setUsers(data);
    };

    const handleCreateUser = async () => {
        await createUser(newUser);
        fetchUsers(); // รีโหลดข้อมูล
    };

    const handlePreUpdateUser = (id:string,user:User) =>{
        setUpUser(user)
    }

    const handleUpdateUser = async (id: string, user:User) => {
        await updateUser(id, user);
        fetchUsers();
    };

    const handleDeleteUser = async (id: string) => {
        await deleteUser(id);
        fetchUsers();
    };


    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">User Management</h1>
            {/* New User */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="EmployeeID"
                    value={newUser.employeeID}
                    onChange={(e) => setNewUser({ ...newUser, employeeID: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="EmployeeCode"
                    value={newUser.employeeCode}
                    onChange={(e) => setNewUser({ ...newUser, employeeCode: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="FullName"
                    value={newUser.fullName}
                    onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="DepartmentName"
                    value={newUser.departmentName}
                    onChange={(e) => setNewUser({ ...newUser, departmentName: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="RoleName"
                    value={newUser.roleName}
                    onChange={(e) => setNewUser({ ...newUser, roleName: e.target.value })}
                    className="border p-2 mr-2"
                />
                <button onClick={handleCreateUser} className="bg-blue-500 text-white p-2 ml-2">
                    Add User
                </button>
            </div>
            <hr />
           {/*  update user */}
            <div className="mt-4 mb-4">
                <input
                    type="text"
                    placeholder="EmployeeID"
                    value={upUser.employeeID}
                    onChange={(e) => setUpUser({ ...upUser, employeeID: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="EmployeeCode"
                    value={upUser.employeeCode}
                    onChange={(e) => setUpUser({ ...upUser, employeeCode: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="FullName"
                    value={upUser.fullName}
                    onChange={(e) => setUpUser({ ...upUser, fullName: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="DepartmentName"
                    value={upUser.departmentName}
                    onChange={(e) => setUpUser({ ...upUser, departmentName: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="RoleName"
                    value={upUser.roleName}
                    onChange={(e) => setUpUser({ ...upUser, roleName: e.target.value })}
                    className="border p-2 mr-2"
                />
                <button onClick={() => handleUpdateUser(upUser.employeeCode!,upUser)} className="bg-blue-500 text-white p-2 ml-2">
                    Update User
                </button>
            </div>

            <ul>
                {users.map((user) => (
                    <li key={user.employeeCode} className="border p-2 flex justify-between items-center">
                        <div>
                            <p>EmployeeID : {user.employeeID}</p>
                            <p>EmployeeCode : {user.employeeCode}</p>
                            <p>FullName : {user.fullName}</p>
                            <p>DepartmentName : {user.departmentName}</p>
                            <p>RoleName: {user.roleName}</p>
                        </div>
                        <div>
                            <button onClick={() => handlePreUpdateUser(user.employeeCode!, user)} className="bg-yellow-500 text-white p-2 mx-2">
                                Edit
                            </button>
                            <button onClick={() => handleDeleteUser(user.employeeCode!)} className="bg-red-500 text-white p-2">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

/* 
<input
    type="file"
    onChange={(e) => setNewUser({ ...newUser, avatar: e.target.files?.[0] })}
    className="border p-2"
/> */