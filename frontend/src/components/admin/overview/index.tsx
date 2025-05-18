'use client';

import VisitorChart from './charts/visitors';
import DashboardTopLocations from './charts/top-locations';
import GeneralResultsChart from './charts/general-results';
import ImpressionsChart from './charts/impressions';
import ContainerSection from '@/components/container';
import PageHeader from '@/components/page-header';
import RotatingLoader from '@/components/rotating-loader';
import { useFetchDashboardSummaryQuery } from '@/redux/api/dashboard';

function DashboardOverviewSection() {
  const { data: dashboardSummary, isLoading } = useFetchDashboardSummaryQuery(null);

  return (
    <ContainerSection>
      <div className="grid w-full gap-5">
        <PageHeader pageTitle="Overview" />
        {isLoading ? (
          <RotatingLoader />
        ) : dashboardSummary ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="grid grid-cols-2 gap-3">
              <VisitorChart summary={dashboardSummary.data} />
              <DashboardTopLocations summary={dashboardSummary.data} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              <GeneralResultsChart summary={dashboardSummary.data} />
              <ImpressionsChart summary={dashboardSummary.data} />
            </div>
          </div>
        ) : (
          <div>Nothing found</div>
        )}
      </div>
    </ContainerSection>
  );
}

export default DashboardOverviewSection;
