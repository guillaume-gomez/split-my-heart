import React from 'react';
import './App.css';

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import FillYourHeart from "./Views/FillYourHeart";
import SplitMyHeartCanvas from "./Components/SplitMyHeartCanvas";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <FillYourHeart />,
  },
  {
    path: "about",
    element: <SplitMyHeartCanvas />,
  },
]);


function App() {
  return (
    <div className="App">
      <div className="flex flex-col gap-5 items-center">
        <Header />
         <RouterProvider router={router} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
