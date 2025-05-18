interface IDashboardSummary {
  uniqueVisitors: {
    labels: string[];
    data: number[];
  };
  topLocations: { state: string; percentage: number }[];
  contentClicks: { labels: string[]; dataValues: number[] };
  projectVsPostClicks: { labels: string[]; data: number[] };
}
