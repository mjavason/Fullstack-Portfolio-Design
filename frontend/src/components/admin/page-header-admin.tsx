import { Button } from '@heroui/react';

interface PageHeaderProps {
  pageTitle: string;
  setIsCreateModalOpen: (isOpen: boolean) => void;
}

function PageHeaderAdmin(props: PageHeaderProps) {
  return (
    <div className="flex justify-between align-middle w-full items-center my-5">
      <h2 className="text-5xl font-bold h-fit text-primary">{props.pageTitle}</h2>
      <Button
        onPress={() => props.setIsCreateModalOpen(true)}
        className="rounded-sm text-white bg-accent-primary px-5 py-2"
      >
        Create
      </Button>
    </div>
  );
}

export default PageHeaderAdmin;
