import VisitorChart from './charts/visitors';
import DashboardTopLocations from './charts/top-locations';
import GeneralResultsChart from './charts/general-results';
import ImpressionsChart from './charts/impressions';
import ContainerSection from '@/components/container';
import PageHeader from '@/components/page-header';

function DashboardOverviewSection() {
  return (
    <ContainerSection>
      {/* <!-- second row --> */}
      <div className="grid w-full gap-5">
        <PageHeader pageTitle="Overview"></PageHeader>
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
    </ContainerSection>
  );
}

export default DashboardOverviewSection;
