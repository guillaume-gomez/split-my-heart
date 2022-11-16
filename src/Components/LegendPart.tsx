import React from 'react';

interface LegendPartInterface {
  label: string;
  color: string;
}

function LegendPart({label, color} : LegendPartInterface) {
  return (
    <div className="flex flex-row items-center justify-items-center gap-2">
        <div className="badge" style={{width: 10, background: color}}></div>
        <span>{label}</span>
    </div>
  );
}
export default LegendPart;

