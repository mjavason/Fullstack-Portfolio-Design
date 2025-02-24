import { Image } from '@heroui/react';
import PostTitleMetaData from './title-metadata/post';
import WorkTitleMetaData from './title-metadata/work';

interface FullDetailsHeaderProps {
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  isPost: boolean;
}

function FullDetailsHeader({
  title,
  date,
  category,
  description,
  image,
  isPost,
}: FullDetailsHeaderProps) {
  return (
    <div className="flex flex-col justify-start my-10 text-[#21243D] gap-5">
      <h1 className="text-4xl font-bold w-[50%]">{title}</h1>
      {isPost ? (
        <WorkTitleMetaData date={date} category={category} />
      ) : (
        <PostTitleMetaData date={date} category={category} />
      )}
      <p className="text-lg">{description}</p>
      {!isPost && (
        <Image removeWrapper className="border-4 object-contain w-[100%]" src={image} alt={title} />
      )}
    </div>
  );
}

export default FullDetailsHeader;
