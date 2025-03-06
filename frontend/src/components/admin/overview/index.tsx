import { Image } from '@heroui/react';
import WelcomeMessage from './welcome-message';
import VisitorChart from './charts/visitors';
import DashboardTopLocations from './charts/top-locations';
import GeneralResultsChart from './charts/general-results';

function DashboardOverviewSection() {
  return (
    <section className="bg-white text-[#C8CACB] flex flex-col gap-10 items-center md:px-10">
      {/* welcome message */}
      <WelcomeMessage></WelcomeMessage>

      {/* <!-- second row --> */}
      <div className="grid w-full px-5 gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="grid grid-cols-2 gap-3">
            <VisitorChart></VisitorChart>
            <DashboardTopLocations></DashboardTopLocations>
          </div>

          {/* <!-- inner second column --> */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            <GeneralResultsChart></GeneralResultsChart>

            <div className="w-full shadow-md col-span-2 md:col-span-1 flex flex-col justify-between rounded-md">
              <div className="flex justify-center w-full mb-3 p-3">
                <h4 className="font-semibold text-lg text-[#3E4B58]">Impressions</h4>
              </div>
              <canvas className="h-full" id="impressions"></canvas>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- third row --> */}
      <div className="mt-10 px-5">
        <div className="flex justify-between align-middle w-full items-center py-5">
          <h2 className="text-5xl font-bold h-fit text-black">Projects</h2>
          <button className="rounded-sm text-white bg-[#469DFF] px-5 py-2">Create Project</button>
        </div>
        <div className="grid grid-cols-2 items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          <div className="flex flex-col justify-between w-full p-3 shadow-md">
            <div className="overflow-hidden">
              <Image
                className="w-full object-cover h-[128px] rounded-md"
                src="images/featured/30.png"
                alt=""
                removeWrapper
                isZoomed
              />
            </div>
            <h3 className="text-black text-lg mt-3">Guide to Pro Photography</h3>
            <h5 className="text-gray-400 text-sm">16 March 2019</h5>
            <p className="text-black text-sm my-3">
              Let me start off by saying, you can do this! It will be hard work, but it is'nt
              impossible
            </p>
            <span className="text-[#4CA2FE]">10+ Responses</span>
          </div>
          <div className="flex flex-col justify-between w-full p-3 shadow-md">
            <div className="overflow-hidden">
              <Image
                className="w-full object-cover h-[128px] rounded-md"
                src="images/featured/32.png"
                alt=""
                removeWrapper
                isZoomed
              />
            </div>
            <h3 className="text-black text-lg mt-3">Modern Industrial Design</h3>
            <h5 className="text-gray-400 text-sm">24 February 2025</h5>
            <p className="text-black text-sm my-3">
              Industrial designs require little furniture and more floor space. This design genre
              wants people to be able
            </p>
            <span className="text-[#4CA2FE]">12+ Responses</span>
          </div>
          <div className="flex flex-col justify-between w-full p-3 shadow-md">
            <div className="overflow-hidden">
              <Image
                className="w-full object-cover h-[128px] rounded-md"
                src="images/featured/34.png"
                alt=""
                removeWrapper
                isZoomed
              />
            </div>
            <h3 className="text-black text-lg mt-3">Learning Design Process</h3>
            <h5 className="text-gray-400 text-sm">06 April 2025</h5>
            <p className="text-black text-sm my-3">
              This involves a methodical integration of pedagogical and technological elements to
              enrich all learning
            </p>
            <span className="text-[#4CA2FE]">27+ Responses</span>
          </div>
        </div>
      </div>

      {/* <!-- fourth row --> */}
      <div className="mt-10 px-5">
        <div className="flex justify-between align-middle w-full items-center py-5">
          <h2 className="text-5xl font-bold h-fit text-black">Posts</h2>
          <button className="rounded-sm text-white bg-[#469DFF] px-5 py-2">Create Post</button>
        </div>
        <div className="grid grid-cols-2 items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          <div className="flex flex-col justify-between w-full p-3 shadow-md">
            <h3 className="text-black text-lg mt-3">Guide to Pro Photography</h3>
            <h5 className="text-gray-400 text-sm">16 March 2019</h5>
            <p className="text-black text-sm my-3">
              Let me start off by saying, you can do this! It will be hard work, but it is'nt
              impossible
            </p>
            <span className="text-[#4CA2FE]">10+ Responses</span>
          </div>
          <div className="flex flex-col justify-between w-full p-3 shadow-md">
            <h3 className="text-black text-lg mt-3">Modern Industrial Design</h3>
            <h5 className="text-gray-400 text-sm">24 February 2025</h5>
            <p className="text-black text-sm my-3">
              Industrial designs require little furniture and more floor space. This design genre
              wants people to be able
            </p>
            <span className="text-[#4CA2FE]">12+ Responses</span>
          </div>
          <div className="flex flex-col justify-between w-full p-3 shadow-md">
            <h3 className="text-black text-lg mt-3">Learning Design Process</h3>
            <h5 className="text-gray-400 text-sm">06 April 2025</h5>
            <p className="text-black text-sm my-3">
              This involves a methodical integration of pedagogical and technological elements to
              enrich all learning
            </p>
            <span className="text-[#4CA2FE]">27+ Responses</span>
          </div>
          <div className="flex flex-col justify-between w-full p-3 shadow-md">
            <h3 className="text-black text-lg mt-3">Design Thinking Process</h3>
            <h5 className="text-gray-400 text-sm">04 December 2019</h5>
            <p className="text-black flex-1 text-sm my-3">
              Let me start off by saying, you can do this! It will be hard work, but it is'nt
              impossible
            </p>
            <span className="text-[#4CA2FE]">30+ Responses</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardOverviewSection;
