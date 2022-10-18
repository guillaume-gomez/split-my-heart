import React from 'react';
import { Outlet } from "react-router-dom";


import Footer from "../Components/Footer";
import Header from "../Components/Header";




function ReactRouterRoot() {
  return (
    <div>
      <div className="flex flex-col gap-5 items-center">
        <Header />
         <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default ReactRouterRoot;
