import React from 'react';
import { LoverInterface } from "./Form";
import ResponsiveRange from "./ResponsiveRange";
import ColorPicker from "./ColorPicker";

interface LoverCardInterface {
  lover: LoverInterface;
  deleteLover: () => void;
  changeLover: (newLover: LoverInterface) => void;
}

function LoverCard({lover, changeLover, deleteLover } : LoverCardInterface) {
  function onChangeLoverRate(value: number, lover: LoverInterface) {
    changeLover({...lover, percentage: value});
  }

  function onChangeLoverName(value: string, lover: LoverInterface) {
    changeLover({...lover, name: value});
  }

  function onChangeLoverColor(value: string, lover: LoverInterface) {
    changeLover({...lover, color: value});
  }

  return (
    <div className="indicator">
      <div className="indicator-item indicator-bottom">
          <button className="btn btn-secondary" onClick={() => deleteLover()}>➖</button>
      </div>
      <div className="card w-96 bg-base-100 text-primary shadow-xl" style={{border: `8px solid ${lover.color}`}}>
        <div className="card-body">
          <ColorPicker onChange={(value) => onChangeLoverColor(value, lover)}/>
          <div className="form-control max-w-xs">
              <label className="label">
                <span className="label-text">Your lover's name</span>
              </label>
              <input
                type="text"
                className="input input-primary sm:input-md input-sm input-bordered"
                value={lover.name}
                onChange={(e) => onChangeLoverName(e.target.value, lover)}
              />
          </div>
          <ResponsiveRange
            onChange={(value) => onChangeLoverRate(value, lover)}
            value={lover.percentage}
          />
        </div>
      </div>
    </div>
  );
}
export default LoverCard;