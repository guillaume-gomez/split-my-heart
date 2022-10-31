import React, { useState } from 'react';
import LoverTable from "./LoverTable";
import ErrorForm from "./ErrorForm";
import { uniqBy } from "lodash";

export interface LoverInterface {
  name: string;
  percentage: number;
  color: string;
  edited: boolean;
}

const defaultLover : LoverInterface = {name: "Your lover", percentage: 1, color: "#960A2C", edited: false }

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
    // color uniqueness
    const colors = uniqBy(lovers, 'color');
    if(colors.length < colors.length) {
      setError("Lover's colors are not unique !");
    }

    // make sure the value are 100%
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

    <div className="flex flex-col gap-2 items-center">
          <div className="w-11/12">
          { error ? <ErrorForm message={error} /> : <></> }
          </div>
          <div className="indicator w-11/12 /*overflow-x-auto*/">
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
  );
}
export default Form;
