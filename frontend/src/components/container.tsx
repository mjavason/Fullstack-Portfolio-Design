interface IContainerSectionProps {
  children: React.ReactNode;
}

function ContainerSection({ children }: IContainerSectionProps) {
  return (
    <section className="px-5 md:px-36 text-primary min-h-[90vh] flex flex-col justify-start gap-5">
      {children}
    </section>
  );
}

export default ContainerSection;
