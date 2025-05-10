'use client';

import { motion } from 'framer-motion';
import paths from '@/config/constants/paths';
import { formatLongDate } from '@/utils/date';
import Link from 'next/link';
import { time } from '@/config/motion';

function RecentPostCard(props: { post: IPost; index: number }) {
  const { post, index } = props;

  return (
    <Link href={paths.blogDetails(post.id)}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: time.fast, ease: 'easeOut', delay: index * time.fastest }}
        className="flex flex-col cursor-pointer bg-white p-5 hover:border-1 md:h-full"
      >
        <h3 className="text-3xl font-bold my-5 flex-1 md:first-letter:line-clamp-2 h-full pb-3">
          {post.title}
        </h3>
        <div className="my-3 text-lg">
          <span>{formatLongDate(post.createdAt, 'short')}</span>
          <span className="mx-5">|</span>
          <span>{post.categories.join(', ')}</span>
        </div>
        <p className="flex-1 text-lg break-words h-full line-clamp-3">{post.summary}</p>
      </motion.div>
    </Link>
  );
}

export default RecentPostCard;
