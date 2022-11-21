import React from 'react';
import MobileRange from "./MobileRange";
import Range from "./Range";

interface ResponsiveRangeInterface {
  onChange: (value: number) => void;
  value: number;
}

function ResponsiveRange({onChange, value} : ResponsiveRangeInterface) {
  return (
    <div>
      <div className="sm:block hidden">
        <Range
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="sm:hidden block">
        <MobileRange
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}
export default ResponsiveRange;


