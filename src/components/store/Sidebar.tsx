// components/Sidebar.tsx

import { useUIStore } from "@/types/store/uiStore";


const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useUIStore();

  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button onClick={toggleSidebar} className="p-4">Close Sidebar</button>
    </div>
  );
};

export default Sidebar;

/* 
2️⃣ ใช้ Shared State ใน Component ต่างๆ
เมื่อเรามี store กลางแล้ว เราสามารถใช้ hook useUIStore() 
เพื่อดึงค่าหรืออัปเดต state ใน component ต่างๆ ได้เลย

*/