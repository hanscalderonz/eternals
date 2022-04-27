import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import Datepicker from '../partials/actions/Datepicker';
import OosProducts from '../partials/dashboard/OosProducts';
import TopProducts from '../partials/dashboard/TopProducts';
import Alert from '../partials/dashboard/Alert';
import ChartsHome from '../partials/dashboard/ChartsHome';
// import Banner from '../partials/Banner';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <Alert/>
            {/* Dashboard actions */}
          <hr />
            <div className="flex justify-end items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
               
                {/* <FilterButton /> */}
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                            
              </div>

            </div>

            {/* Cards */}

            <div>
            <ChartsHome />
            </div>
            <div className="grid grid-cols-12 gap-6 mt-8">

              
              {/* Bar chart (Direct vs Indirect) */}
              
              <OosProducts />
              <TopProducts />
           
            </div>

          </div>
        </main>

        {/* <Banner /> */}

      </div>
    </div>
  );
}

export default Dashboard;