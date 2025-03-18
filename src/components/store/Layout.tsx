// components/Layout.tsx
"use client";
import Sidebar from './Sidebar';
import Modal from './Modal';
import { ReactNode } from 'react';
import { useUIStore } from '@/types/store/uiStore';

const Layout = ({ children }: { children: ReactNode }) => {
  const { toggleSidebar, toggleModal } = useUIStore();
  return (
    <div>
      <header className="p-4 bg-gray-700 text-white flex justify-between">
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
        <button onClick={toggleModal}>Open Modal</button>
      </header>
      <Sidebar />
      <Modal />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;