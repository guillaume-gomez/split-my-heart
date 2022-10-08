import React, { useState } from 'react';
import LoverTable from "./LoverTable";

export interface LoverInterface {
  name: string;
  percentage: number;
}

function Form() {
  const [lovers, setLovers] = useState<LoverInterface[]>([]);

  return (
    <div className="card w-3/4 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">what does your heart look like ? 💛</h2>
        <LoverTable lovers={lovers} />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Accept</button>
          <button className="btn btn-ghost">Deny</button>
        </div>
      </div>
    </div>
  );
}
export default Form;
