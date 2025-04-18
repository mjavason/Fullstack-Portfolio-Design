import { Button } from '@heroui/react';
import { FC, ReactNode, useRef } from 'react';

interface RootModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const RootModal: FC<RootModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-full md:w-[90%] h-[90vh] overflow-auto border-1 relative"
      >
        <Button
          onPress={onClose}
          className="absolute top-2 right-2 bg-transparent text-xl text-primary"
        >
          ✖
        </Button>
        {children}
      </div>
    </div>
  );
};

export default RootModal;
