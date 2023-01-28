import React from 'react';
import { LoverInterface } from "./Form";
import { sumBy } from "lodash";

interface SumPercentageInterface {
  lovers: LoverInterface[];
}

function SumPercentage({ lovers } : SumPercentageInterface) {
  const sumOfLove = sumBy(lovers, 'percentage');
    let fontColor = "";
    if(sumOfLove > 100) {
      fontColor = "text-error";
    } else if (sumOfLove < 100) {
      fontColor = "text-warning";
    } else {
      fontColor = "text-black";
    }
  return (
    <div className="card bg-base-100 p-4 text-2xl">
    <span className={fontColor}>{`${sumOfLove} %`}</span>
    </div>
  )
}

export default SumPercentage;
