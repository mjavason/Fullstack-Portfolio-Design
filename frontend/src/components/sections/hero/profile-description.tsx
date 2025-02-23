import { Button } from '@heroui/react';

function ProfileDescription() {
  return (
    <div className='order-2 lg:order-1 flex-1 flex flex-col gap-10 w-full lg:w-2/3 text-[#21243D]'>
      <h1 className='px-3 lg:px-0 text-4xl lg:text-5xl font-bold'>
        Hi, I am John.
        <br />
        Creative Technologist
      </h1>
      <p className='text-xl'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <div>
        <Button className='p-4 rounded-lg bg-[#FF6464] text-white w-[70%] lg:w-[40%] text-xl lg:text-2xl'>
          Download Resume
        </Button>
      </div>
    </div>
  );
}

export default ProfileDescription;
