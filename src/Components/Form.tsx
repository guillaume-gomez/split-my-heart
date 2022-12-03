import React, { useState } from 'react';
import LoverTable from "./LoverTable";
import ErrorForm from "./ErrorForm";
import { uniqBy, sumBy } from "lodash";

export interface LoverInterface {
  name: string;
  percentage: number;
  color: string;
  edited: boolean;
}

interface FormInterface {
  onSubmit: (name: string, lovers: LoverInterface[]) => void;
}


const defaultLover : LoverInterface = {name: "Your lover", percentage: 1, color: "#960A2C", edited: false }

const initialState : LoverInterface[] = [defaultLover];

function Form({ onSubmit: submitParams} : FormInterface) {
  const [lovers, setLovers] = useState<LoverInterface[]>(initialState);
  const [name, setName] = useState<string>("");
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
    const sumOfLove = sumBy(pendingLovers, 'percentage');
    return 100 - sumOfLove;
  }

  function onSubmit() {
    // color uniqueness
    const colors = uniqBy(lovers, 'color');

    if(colors.length < lovers.length) {
      setError("Lover's colors are not unique ! 😛");
      return;
    }

    if(name.length === 0) {
      setError("Please fill your name ☺️");
      return;
    }

    // make sure the value are 100%
    const loveDiff = validatePercentages(lovers);
    if(loveDiff === 0) {
      setError("");
      submitParams(name, lovers);
    }
    else if(loveDiff > 0) {
      setError("You still have space in your heart 🤗");
    }
    else {
      setError("It's seems your heart is not capable of this amount of love 🤭");
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center">
          <div className="w-11/12">
          { error ? <ErrorForm message={error} /> : <></> }
          </div>
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-neutral-content">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered text-accent placeholder-pink-900"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className="indicator w-11/12">
            <div className="indicator-item indicator-bottom">
              <button className="btn btn-primary" onClick={() => addLover()}>➕</button>
            </div>

            <div className="overflow-x-auto w-full">
              <LoverTable
                lovers={lovers}
                deleteLover={deleteLover}
                changeLover={changeLover}
                toggleLover={toggleLover}
              />
            </div>
          </div>
        <button className="btn btn-lg btn-primary" onClick={onSubmit}>Submit</button>
    </div>
  );
}
export default Form;
