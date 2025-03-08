function DashboardTopLocations() {
  return (
    <div className="flex flex-col gap-3 items-center justify-between shadow-md p-3 rounded-md">
      <div className="flex justify-between w-full mb-3">
        <h4 className="font-semibold text-lg text-primary">Top Locations</h4>
        <i className="fas fa-ellipsis-h cursor-pointer"></i>
      </div>

      <div className="w-full flex flex-col gap-3">
        <div className="w-full">
          <div className="flex w-full justify-between">
            <h5 className="text-sm font-medium text-primary mb-2">Enugu</h5>
            <h5>74%</h5>
          </div>
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div id="progress-bar" className="h-full w-[74%] bg-accent-primary"></div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex w-full justify-between">
            <h5 className="text-sm font-medium text-primary mb-2">Abuja</h5>
            <h5>51%</h5>
          </div>
          {/* <!-- Progress Bar Container --> */}
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div id="progress-bar" className="h-full w-[53%] bg-accent-primary"></div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex w-full justify-between">
            <h5 className="text-sm font-medium text-primary mb-2">Lagos</h5>
            <h5>42%</h5>
          </div>
          {/* <!-- Progress Bar Container --> */}
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div id="progress-bar" className="h-full w-[42%] bg-accent-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTopLocations;
