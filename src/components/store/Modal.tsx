// components/Modal.tsx

import { useUIStore } from "@/types/store/uiStore";

const Modal = () => {
  const { isModalOpen, toggleModal } = useUIStore();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>Modal Content</p>
        <button onClick={toggleModal} className="mt-4 p-2 bg-blue-500 text-white">Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;