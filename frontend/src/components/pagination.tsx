import { Pagination } from '@heroui/react';

function PaginationComponent(props: {
  currentPage: number;
  total: number;
  onChange: (page: number) => void;
}) {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <Pagination
        variant="light"
        color="primary"
        page={props.currentPage}
        total={props.total}
        onChange={props.onChange}
      />
    </div>
  );
}

export default PaginationComponent;
