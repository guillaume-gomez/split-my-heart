import React from 'react';
import './App.css';

import ReactRouterRoot from "./Views/ReactRouterRoot";
import ErrorPage from "./Views/ErrorPage";
import FillYourHeart from "./Views/FillYourHeart";
import FillYourHeartResult from "./Views/FillYourHeartResult";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";



const router = createBrowserRouter(
   createRoutesFromElements(
     <Route
        path="/"
        element={<ReactRouterRoot />}
     >
       <Route errorElement={<ErrorPage />}>
         <Route index element={<FillYourHeart />} />
         <Route path="/my-heart" element={<SplitMyHeartCanvas />} />
         <Route path="/rawanita" element={<FillYourHeart />} />
       </Route>
     </Route>
   )
);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
