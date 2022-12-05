import React from 'react';
import { dataStats } from "./SplitMyHeartCanvas";
import LegendPart from "./LegendPart";

interface LegendInterface {
  loversData: dataStats[];
}

function Legend({loversData} : LegendInterface) {
  return (
    <div className="card bg-base-300 flex flex-col gap-5 items-center p-2">
      {
        loversData.map((loverData, index) =>
          <LegendPart
            key={`${loverData.name}-${index}`}
            label={`${loverData.name}  ${loverData.percentage}%`}
            color={loverData.color}
          />
        )
      }
    </div>
  );
}
export default Legend;