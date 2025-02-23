function RecentPostsSectionHeader() {
  return (
    <div className='flex justify-center md:justify-between my-5 text-[#21243D]'>
      <span className='text-2xl'>Recent Posts</span>
      <span className='hidden md:inline text-[#00A8CC] hover:underline text-lg cursor-pointer'>
        View all
      </span>
    </div>
  );
}

export default RecentPostsSectionHeader;
