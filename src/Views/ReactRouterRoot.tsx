import React from 'react';
import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

function ReactRouterRoot() {
  return (
      <div className="flex flex-col gap-5 h-screen items-center">
        <Header />
         <div className="flex-grow flex flex-col gap-5 items-center w-10/12">
          <Outlet/>
         </div>
        <Footer />
      </div>
  );
}

export default ReactRouterRoot;
