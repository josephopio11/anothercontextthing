import { XCircleIcon } from "lucide-react";
import React, { ReactNode } from "react";

type OverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const Overlay = ({ isOpen, onClose, children }: OverlayProps) => {
  return (
    <div
      className={` fixed inset-0 flex items-center justify-center p-10 ${
        isOpen ? "block" : "hidden"
      } z-50 bg-gray-900/90`}
    >
      <div className="relative h-full w-full max-w-2xl overflow-hidden rounded-lg border-4 border-gray-200 bg-gray-900 p-4 pt-10 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-300 hover:text-gray-100 focus:outline-none"
        >
          <XCircleIcon className="h-6 w-6" onClick={() => onClose} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
