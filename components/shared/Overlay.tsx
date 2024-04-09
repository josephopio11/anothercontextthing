import { XCircleIcon } from "lucide-react";
import React, { ReactNode } from "react";
import { Button } from "../ui/button";

type OverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const Overlay = ({ isOpen, onClose, children }: OverlayProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-10 ${
        isOpen ? "block" : "hidden"
      } z-50 bg-gray-900/20`}
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-lg border-4 border-gray-200 bg-white dark:bg-blue-950 p-4 pt-10 shadow-lg shadow-black transition-all duration-300">
        <Button
          variant={"ghost"}
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-300 focus:outline-none"
        >
          <XCircleIcon className="h-4 w-4" onClick={() => onClose} />
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
