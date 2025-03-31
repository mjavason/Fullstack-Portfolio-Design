import { Button } from '@heroui/react';

interface PageHeaderProps {
  pageTitle: string;
  setIsModalOpen(isOpen: boolean): void;
}

function PageHeaderAdmin({ pageTitle, setIsModalOpen }: PageHeaderProps) {
  return (
    <div className="flex justify-between align-middle w-full items-center my-5">
      <h2 className="text-5xl font-bold h-fit text-primary">{pageTitle}</h2>
      <Button
        onPress={() => setIsModalOpen(true)}
        className="rounded-sm text-white bg-accent-primary px-5 py-2"
      >
        Create
      </Button>
    </div>
  );
}

export default PageHeaderAdmin;
