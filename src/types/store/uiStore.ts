import { create } from 'zustand';
// store/uiStore.ts
export interface UIState {
    isSidebarOpen: boolean;
    isModalOpen: boolean;
    toggleSidebar: () => void;
    toggleModal: () => void;
  }
  
  export const useUIStore = create<UIState>((set) => ({
    isSidebarOpen: false,
    isModalOpen: false,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  }));
  

  /* 
  ✅ ในโค้ดนี้เราสร้าง store ที่มี state isSidebarOpen และ isModalOpen 
  พร้อมฟังก์ชัน toggleSidebar และ toggleModal เพื่อเปลี่ยนค่า state
   */