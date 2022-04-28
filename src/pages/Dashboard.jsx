import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Datepicker from '../partials/actions/Datepicker';
import OosProducts from '../partials/dashboard/OosProducts';
import TopProducts from '../partials/dashboard/TopProducts';
import Alert from '../partials/dashboard/Alert';
import ChartsHome from '../partials/dashboard/ChartsHome';
import Filters from '../partials/dashboard/Filters';


function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header title="Metricas" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <Alert/>
          <Filters />
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
            <iframe
            style={{
              width:"100%",
              height:"600px"
            }}
            src="https://datastudio.google.com/embed/u/0/reporting/0ac2fdbb-4c0e-47ae-8944-0d54544e3831/page/V9ZrC" frameborder="0"></iframe>
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