import TopLocationLine from './line';

function DashboardTopLocations(props: { summary: IDashboardSummary }) {
  const { summary } = props;
  return (
    <div className="flex flex-col gap-3 items-center justify-between border-1 p-3 rounded-md">
      <div className="flex justify-between w-full mb-3">
        <h4 className="font-semibold text-lg text-primary">Top Locations</h4>
        {/* <i className="fas fa-ellipsis-v cursor-pointer p-3"></i> */}
      </div>

      <div className="w-full flex flex-col gap-3"></div>
      {summary?.topLocations.map((location, index) => (
        <TopLocationLine
          key={index}
          state={location.state}
          percentage={location.percentage}
        ></TopLocationLine>
      ))}
    </div>
  );
}

export default DashboardTopLocations;
