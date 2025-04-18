import { Button } from '@heroui/react';

function ProfileDescription() {
  return (
    <div className="order-2 lg:order-1 flex-1 flex flex-col gap-10 w-full lg:w-2/3 text-primary">
      <h1 className="flex flex-col gap-3 px-3 lg:px-0 text-4xl lg:text-5xl font-bold">
        <p>Hi, I am John.</p>
        <p>Creative Technologist</p>
      </h1>
      <p className="text-xl">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
      <div>
        <Button className="px-4 py-6 rounded-lg bg-accent-primary text-white w-[70%] lg:w-[40%] text-lg">
          Download Resume
        </Button>
      </div>
    </div>
  );
}

export default ProfileDescription;
