function WelcomeMessage() {
  {
    /* <!-- first row --> */
  }
  return (
    <div className="flex justify-between w-full items-center p-5">
      <div>
        <h1 className="text-primary text-2xl">Hello Vallendito</h1>
        <p className="text-lg">Your recap articles at this time</p>
      </div>
      {/* <!-- <button className="rounded-sm text-white bg-accent-primary px-5 py-2">Create Article</button> --> */}
    </div>
  );
}

export default WelcomeMessage;
