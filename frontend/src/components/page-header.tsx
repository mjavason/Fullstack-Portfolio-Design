interface PageHeaderProps {
  pageTitle: string;
}

function PageHeader({ pageTitle }: PageHeaderProps) {
  return (
    <div className="flex justify-between my-5 text-primary">
      <span className="text-5xl font-bold">{pageTitle}</span>
    </div>
  );
}

export default PageHeader;
