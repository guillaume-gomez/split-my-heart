import React from 'react';
import { dataStats } from "./SplitMyHeartCanvas";
import LegendPart from "./LegendPart";

interface LegendInterface {
  loversData: dataStats[];
}

function Legend({loversData} : LegendInterface) {
  return (
    <div className="card bg-base-300 flex md:flex-row flex-col gap-5 justify-items-center items-center border">
      {
        loversData.map(loverData =>
          <LegendPart
            label={`${loverData.name}  ${loverData.percentage}%`}
            color={loverData.color}
          />
        )
      }
    </div>
  );
}
export default Legend;