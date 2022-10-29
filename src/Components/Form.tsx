import React, { useState } from 'react';
import LoverTable from "./LoverTable";
import ErrorForm from "./ErrorForm";

export interface LoverInterface {
  name: string;
  percentage: number;
  edited: boolean;
}

const defaultLover : LoverInterface = {name: "Your lover", percentage: 1, edited: false }

const initialState : LoverInterface[] = [defaultLover];

function Form() {
  const [lovers, setLovers] = useState<LoverInterface[]>(initialState);
  const [error, setError] = useState<string>("");

  function deleteLover(index: number) {
    const newLovers = lovers.filter((_lover, position) => index !== position);
    setLovers(newLovers);
  }

  function addLover() {
    const newLover = {...defaultLover, name: `Your lover ${lovers.length}`}
    const newLovers = [...lovers, newLover];
    setLovers(newLovers);
  }


  function changeLover(index: number, loverUpdated: LoverInterface) {
    const newLovers = lovers.map((lover, position) => {
      if(index === position) {
        return loverUpdated;
      };
      return lover;
    });
    setLovers(newLovers);
  }

  function toggleLover(index: number) {
    const newLovers = lovers.map((lover, position) => {
      if(position === index) {
        return { ...lover, edited: !lover.edited };
      }
      return { ...lover, edited: false };
    });
    setLovers(newLovers);
  }

  function validatePercentages(pendingLovers: LoverInterface[]) : number {
    const sumOfLove = pendingLovers.reduce(
      (acc, lover, positionLover) => {
        return acc + lover.percentage;
      }
    , 0);
    return 100 - sumOfLove;
  }

  function onSubmit() {
    const loveDiff = validatePercentages(lovers);
    if(loveDiff === 0) {
      setError("");
      // redirect to
    }
    else if(loveDiff > 0) {
      setError("You still have space in your heart");
    }
    else {
      setError("It's seems your heart is not capable of this amount of love");
    }
  }


  return (
    <div className="card w-3/4 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">what does your heart look like ? 💛</h2>
        <div className="w-3/4">
          { error ? <ErrorForm message={error} /> : <></> }
        </div>
          <div className="indicator w-3/4">
            <div className="indicator-item indicator-bottom">
              <button className="btn btn-primary" onClick={() => addLover()}>➕</button>
            </div>
            <LoverTable
              lovers={lovers}
              deleteLover={deleteLover}
              changeLover={changeLover}
              toggleLover={toggleLover}
            />
          </div>
        <button className="btn btn-lg btn-primary" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}
export default Form;
