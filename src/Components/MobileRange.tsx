import React from 'react';

interface MobileRangeInterface {
  onChange: (value: number) => void;
  value: number;
}

function MobileRange({onChange, value} : MobileRangeInterface) {
  return (
    <div className="btn-group">
      <button className="btn btn-sm" onClick={() => onChange(value - 1)}>➖</button>
      <input
        type="number"
        className="w-16 input input-sm rounded-none"
        value={value}
        onChange={(event) => onChange(parseInt(event.target.value, 10))}
      />
      <button className="btn btn-sm" onClick={() => onChange(value + 1)}>➕</button>
    </div>
  );
}
export default MobileRange;


