interface FullDetailsProps {
  content: string;
}

function FullDetails({ content }: FullDetailsProps) {
  return (
    <div className="w-full flex flex-col text-lg">
      <div
        className="[&img]:w-full [&img]:h-auto [&img]:my-4 [&img]:rounded-xl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default FullDetails;
