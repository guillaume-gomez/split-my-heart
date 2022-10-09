import React, { useState } from 'react';
import LoverTable from "./LoverTable";

export interface LoverInterface {
  name: string;
  percentage: number;
  edited: boolean;
}

const defaultLover : LoverInterface = {name: "Your lover", percentage: 100, edited: false }

const initialState : LoverInterface[] = [defaultLover];

function Form() {
  const [lovers, setLovers] = useState<LoverInterface[]>(initialState);

  function deleteLover(index: number) {
    const newLovers = lovers.filter((_lover, position) => index !== position);
    setLovers(newLovers);
  }

  function addLover() {
    const newLovers = [...lovers, defaultLover];
    setLovers(newLovers);
  }

  function changeLover(index: number, loverUpdated: LoverInterface) {
    const newLovers = lovers.map((lover, position) => {
      if(index === position) {
        return loverUpdated;
      };
      return lover;
    });
    console.log(loverUpdated);
    setLovers(newLovers)
  }

  console.log(lovers)

  return (
    <div className="card w-3/4 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">what does your heart look like ? 💛</h2>
        <div className="indicator">
          <div className="indicator-item indicator-bottom">
            <button className="btn btn-primary" onClick={() => addLover()}>➕</button>
          </div>
          <LoverTable
            lovers={lovers}
            deleteLover={deleteLover}
            changeLover={changeLover}
          />
        </div>
      </div>
    </div>
  );
}
export default Form;
