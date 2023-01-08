import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form, { LoverInterface } from "../Components/Form";

import PopUp from "../Components/PopUp";

export interface LoverApiInterface {
  n: string;
  p: number;
  c: string;
}

function FillYourHeart() {
  const formRef = useRef<HTMLDivElement>(null);
  let navigate = useNavigate();
  const location = useLocation();

  function submit(name: string, lovers: LoverInterface[]){
    let compressedLovers : LoverApiInterface[]  = [];
    if(location.pathname === "/rawanita") {
      compressedLovers = [{n: "Guillaume", p: 100, c: "#16623C" }];
    } else {
      compressedLovers = lovers.map(lover => ({ n: lover.name, p: lover.percentage, c: lover.color }));
    }
    return navigate(`/my-heart?name=${name}&params=${encodeURIComponent(JSON.stringify(compressedLovers))}`);
  }

  function onClick() {
    if(formRef && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }
  }

  return (
    <>
      <PopUp />
      <div ref={formRef} id="form" className="card w-full bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">What does your heart look like ? 💛</h2>
          <div className="w-11/12">
            <Form onSubmit={submit} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FillYourHeart;
