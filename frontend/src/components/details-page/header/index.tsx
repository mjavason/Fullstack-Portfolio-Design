import Image from 'next/image';
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
    <div className="flex flex-col justify-start text-primary gap-3">
      <h1 className="text-4xl font-bold w-full md:w-[50%]">{title}</h1>
      {isPost ? (
        <PostTitleMetaData date={date} category={category} />
      ) : (
        <WorkTitleMetaData date={date} category={category} />
      )}
      <p className="text-lg">{description}</p>
      {!isPost && (
        <div className="overflow-hidden rounded-lg">
          <Image
            className="object-contain w-[100%] rounded-lg"
            src={image}
            alt={title}
            width={1000}
            height={500}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          />
        </div>
      )}
    </div>
  );
}

export default FullDetailsHeader;
