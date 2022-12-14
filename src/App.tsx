import React from 'react';
import './App.css';

import ReactRouterRoot from "./Views/ReactRouterRoot";
import ErrorPage from "./Views/ErrorPage";
import FillYourHeart from "./Views/FillYourHeart";
import FillYourHeartResult from "./Views/FillYourHeartResult";

import {
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";



const router = createHashRouter(
   createRoutesFromElements(
     <Route
        path=""
        element={<ReactRouterRoot />}
     >
       <Route errorElement={<ErrorPage />}>
         <Route index element={<FillYourHeart />} />
         <Route path="/rawanita" element={<FillYourHeart />} />
         <Route path="/my-heart" element={<FillYourHeartResult />} />
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
