import { truncate } from '@/utils/string';
import { Chip } from '@heroui/react';
import { CheckIcon } from '../icons/check';

function PostCard(props: { post: IPost }) {
  return (
    <div className="flex flex-col justify-between w-full p-3 shadow-md min-h-16">
      <div className="flex flex-col">
        <h3 className="text-black text-lg mt-3 break-words flex-1 md:line-clamp-2">
          {props.post.title}
        </h3>
        <h5 className="text-gray-400 text-sm">
          {new Date(props.post.createdAt).toLocaleDateString()}
        </h5>
      </div>
      <p className="text-black flex-1 text-sm my-3 md:line-clamp-3">{props.post.summary}</p>
      <div className="flex justify-between items-center">
        <span className="text-accent-primary text-sm">
          {Math.floor(Math.random() * 50) + 1}+ Clicks
        </span>
        {props.post.published ? (
          <Chip variant="bordered" color="success" startContent={<CheckIcon size={18} />}>
            Live
          </Chip>
        ) : (
          <Chip color="warning" variant="bordered">
            Draft
          </Chip>
        )}
      </div>
    </div>
  );
}

export default PostCard;
