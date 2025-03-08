import VisitorChart from './charts/visitors';
import DashboardTopLocations from './charts/top-locations';
import GeneralResultsChart from './charts/general-results';
import ImpressionsChart from './charts/impressions';

function DashboardOverviewSection() {
  return (
    <section className="bg-white flex flex-col gap-10 min-h-[70vh] items-center md:px-10">
      {/* <!-- second row --> */}
      <div className="grid w-full px-5 mt-10 gap-3">
        <div className="flex justify-between align-middle w-full items-center py-5">
          <h2 className="text-5xl font-bold h-fit text-black">Overview</h2>
          {/* <Button className="rounded-sm text-white bg-accent-primary px-5 py-2">Create</Button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="grid grid-cols-2 gap-3">
            <VisitorChart></VisitorChart>
            <DashboardTopLocations></DashboardTopLocations>
          </div>

          {/* <!-- inner second column --> */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            <GeneralResultsChart></GeneralResultsChart>
            <ImpressionsChart></ImpressionsChart>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardOverviewSection;
