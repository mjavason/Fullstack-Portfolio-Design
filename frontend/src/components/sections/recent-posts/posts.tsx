function RecentPosts() {
  const posts = [
    {
      title: 'Making a design system from scratch',
      date: '12 Feb 2020',
      category: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: 'Creating a pixel perfect icon in Figma',
      date: '12 Feb 2020',
      category: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];
  const renderedPosts = posts.map((post, index) => {
    return (
      <div key={index} className='flex flex-col cursor-pointer bg-white p-5 hover:shadow-md'>
        <h3 className='text-3xl font-bold my-5 flex-1'>{post.title}</h3>
        <div className='my-3 text-lg'>
          <span>{post.date}</span>
          <span className='mx-5'>|</span>
          <span>{post.category.join(', ')}</span>
        </div>
        <p className='flex-1 text-lg'>{post.description}</p>
      </div>
    );
  });

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 items-stretch gap-5'>
      {renderedPosts}
    </div>
  );
}

export default RecentPosts;
