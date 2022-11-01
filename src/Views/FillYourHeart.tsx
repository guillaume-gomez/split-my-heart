import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form, { LoverInterface } from "../Components/Form";

export interface LoverApiInterface {
  name: string;
  percentage: number;
  color: string;
}

function FillYourHeart() {
  let navigate = useNavigate();
  const location = useLocation();

  function submit(lovers: LoverInterface[]){
    let compressedLovers : LoverApiInterface[]  = [];
    debugger
    if(location.pathname === "/rawanita") {
      compressedLovers = [{name: "Guillaume", percentage: 100, color: "#16623C" }];
    } else {
      compressedLovers = lovers.map(lover => ({ name: lover.name, percentage: lover.percentage, color: lover.color }));
    }

    return navigate(`/my-heart?params=${encodeURIComponent(JSON.stringify(compressedLovers))}`);
  }

  return (
    <div className="card w-full bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">What does your heart look like ? 💛</h2>
        <div className="w-11/12">
          <Form onSubmit={submit} />
        </div>
      </div>
    </div>
  );
}

export default FillYourHeart;
