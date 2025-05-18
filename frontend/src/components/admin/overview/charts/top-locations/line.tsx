function TopLocationLine(props: { state: string; percentage: number }) {
  const { state, percentage } = props;

  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <h5 className="text-sm font-medium text-primary mb-2">{state}</h5>
        <h5>{percentage}%</h5>
      </div>
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          id="progress-bar"
          className="h-full bg-accent-primary"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default TopLocationLine;
