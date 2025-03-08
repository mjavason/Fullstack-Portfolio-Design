interface WorkTitleMetaDataProps {
  date: string;
  category: string;
}

function WorkTitleMetaData({ date, category }: WorkTitleMetaDataProps) {
  return (
    <div className="my-3 text-2xl flex items-center gap-5">
      <span className="rounded-full px-3 p-0 bg-accent-primary font-semibold text-white">
        {date}
      </span>
      <span>{category}</span>
    </div>
  );
}

export default WorkTitleMetaData;
