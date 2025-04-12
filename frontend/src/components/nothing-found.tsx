function NothingFound(props: { text: string }) {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <h2 className="text-gray-400 text-lg">{props.text}</h2>
    </div>
  );
}

export default NothingFound;
