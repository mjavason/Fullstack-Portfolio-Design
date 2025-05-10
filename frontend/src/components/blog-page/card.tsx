'use client';

import paths from '@/config/constants/paths';
import { staggerListItemVariants } from '@/utils/animation/stagger-list';
import { formatLongDate } from '@/utils/date';
import { motion } from 'framer-motion';
import Link from 'next/link';

function BlogPageCard(props: { post: IPost }) {
  const { post } = props;

  return (
    <Link key={post.id} href={paths.blogDetails(post.id)}>
      <motion.div
        variants={staggerListItemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col cursor-pointer py-5 border-b-2"
      >
        <h3 className="text-3xl font-bold my-5 flex-1">{post.title}</h3>
        <div className="my-3 text-lg">
          <span>{formatLongDate(post.createdAt, 'short')}</span>
          <span className="mx-5">|</span>
          <span className="text-secondary">{post.categories.join(', ')}</span>
        </div>
        <p className="flex-1 text-lg line-clamp-4">{post.summary}</p>
      </motion.div>
    </Link>
  );
}

export default BlogPageCard;
