import React from 'react';
import { dataStats } from "./SplitMyHeartCanvas";

interface LegendInterface {
  loversData: dataStats[];
}

function Legend({loversData} : LegendInterface) {
  return (
    <div className="card bg-base-300 flex md:flex-row flex-col gap-5 justify-items-center items-center border">
      {
        loversData.map(loverData =>
          (<div className="card-body flex flex-row items-center justify-items-center gap-2">
              <div className="badge" style={{width: 10, background: loverData.color}}></div>
              <span>{`${loverData.name}  ${loverData.percentage}%`}</span>
           </div>
          )
        )
      }
    </div>
  );
}
export default Legend;