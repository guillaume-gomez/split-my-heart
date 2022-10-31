import React from 'react';

import Form from "../Components/Form";

function FillYourHeart() {
  return (
    <div className="card w-full bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">What does your heart look like ? 💛</h2>
        <div className="w-11/12">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default FillYourHeart;
