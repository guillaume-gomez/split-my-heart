import React from 'react';
import { LoverInterface } from "./Form";
import Range from "./Range";
import { sumBy } from "lodash";

interface LoverTableInterface {
  lovers: LoverInterface[];
  deleteLover: (index: number) => void;
  changeLover: (index: number, newLover: LoverInterface) => void;
  toggleLover: (index: number) => void;
}

function LoverTable({ lovers, deleteLover, changeLover, toggleLover } : LoverTableInterface) {


  function onChangeLoverRate(index: number, value: number, lover: LoverInterface) {
    changeLover(index, {...lover, percentage: value});
  }

  function onChangeLoverName(index: number, value: string, lover: LoverInterface) {
    changeLover(index, {...lover, name: value});
  }

  function onChangeLoverColor(index: number, value: string, lover: LoverInterface) {
    changeLover(index, {...lover, color: value});
  }

  function displaySumPercentage()  {
    const sumOfLove = sumBy(lovers, 'percentage');
    let fontColor = "";
    if(sumOfLove > 100) {
      fontColor = "text-error";
    } else if (sumOfLove < 100) {
      fontColor = "text-warning";
    } else {
      fontColor = "text-black";
    }
    return <span className={fontColor}>{`${sumOfLove} %`}</span>
  }

  return (
      <table className="table table-zebra w-full">
        <thead className="bg-warning-content">
          <tr className="text-black">
            <th className="lg:w-5/12 w-4/12">Name</th>
            <th className="lg:w-3/12 w-4/12">Love's rate</th>
            <th className="lg:w-2/12 w-4/12">Love's color</th>
            <th className="lg:w-2/12 w-4/12">Actions</th>
          </tr>
        </thead>
        <tbody>
        { lovers.map((lover, index) => {
          return (
              <tr className={`text-neutral ${lover.edited ? "bg-secondary" : ""}`}
                key={`${lover.name}-${index}`}
                onClick={(event)=> {
                  if(!lover.edited) {
                    toggleLover(index)
                  }
                }
              }>
                <td>
                  {
                    lover.edited ?
                    <input
                      type="text"
                      className="input input-bordered"
                      value={lover.name}
                      onChange={(e) => onChangeLoverName(index, e.target.value, lover)}
                    />
                    :
                    lover.name
                  }

                </td>
                <td>
                  {
                    lover.edited ?
                    <Range
                      onChange={(value) => onChangeLoverRate(index, value, lover)}
                      value={lover.percentage}
                    />
                    :
                    lover.percentage + " %"
                  }
                </td>
                <td>
                  <input
                    type="color"
                    value={lover.color}
                    onChange={(event) => onChangeLoverColor(index, event.target.value, lover)}
                    disabled={!lover.edited}
                  />
                </td>
                <td>
                  <div className="flex flex-row gap-2">
                    <button  className="btn btn-circle btn-sm" onClick={() => toggleLover(index)}>🖊️</button>
                    {
                      lovers.length > 1 ?
                        <button className="btn btn-circle btn-sm"  onClick={(event) => {deleteLover(index); event.stopPropagation(); }}>🗑️</button>
                      : <></>
                    }
                  </div>
                </td>
              </tr>
            );
          })
        }
        </tbody>
        <tfoot>
          <tr>
            <th className="lg:w-5/12 w-4/12"></th>
            <th className="lg:w-3/12 w-4/12 text-lg">{displaySumPercentage()}</th>
            <th className="lg:w-2/12 w-4/12"></th>
            <th className="lg:w-2/12 w-4/12"></th>
          </tr>
        </tfoot>
      </table>
  );
}
export default LoverTable;