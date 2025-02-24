interface PostTitleMetaDataProps {
  date: string;
  category: string;
}

function PostTitleMetaData({ date, category }: PostTitleMetaDataProps) {
  return (
    <div className="my-3 text-2xl flex items-center gap-5">
      <span>{date}</span>
      <span className="mx-5">|</span>
      <span>{category}</span>
    </div>
  );
}

export default PostTitleMetaData;
