interface FullDetailsProps {
  content: string;
}

function FullDetails({ content }: FullDetailsProps) {
  return (
    <div className="w-full flex flex-col text-lg">
      {content}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ipsum. Impedit, vero deserunt,
        sit quaerat illo quis veniam dolores sapiente recusandae consequuntur architecto iusto odit
        non natus ipsam, consequatur obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse, accusamus totam,
        nisi optio minima, libero culpa natus sit vitae ea! Quod, qui rerum. Expedita hic cum sint
        cupiditate assumenda?
      </p>
    </div>
  );
}

export default FullDetails;
