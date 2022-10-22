import React from 'react';

interface RangeInterface {
  onChange: (value: number) => void;
  value: number;
}

function Range({onChange, value} : RangeInterface) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type="range"
        step="1"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="range range-primary"
        />
        <span>{value} %</span>
    </div>
  );
}
export default Range;