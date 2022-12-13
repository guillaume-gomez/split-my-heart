import React from 'react';
import { LoverInterface } from "./Form";
import ResponsiveRange from "./ResponsiveRange";
import ColorPicker from "./ColorPicker"
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
      <table className="table w-full">
        <thead className="">
          <tr className="text-black">
            <th>#</th>
            <th>Name</th>
            <th>Love's rate</th>
            <th>Love's color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        { lovers.map((lover, index) => {
          return (
              <tr className={`text-accent ${lover.edited ? "bg-secondary" : ""}`}
                key={index}
                onClick={(event)=> {
                  if(!lover.edited) {
                    toggleLover(index)
                  }
                }
              }>
                <td>{index}</td>
                <td>
                  {
                    lover.edited ?
                    <input
                      type="text"
                      className="input sm:input-md input-sm input-bordered"
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
                    <ResponsiveRange
                      onChange={(value) => onChangeLoverRate(index, value, lover)}
                      value={lover.percentage}
                    />
                    :
                    lover.percentage + " %"
                  }
                </td>
                <td>
                  <ColorPicker onChange={(value) => onChangeLoverColor(index, value, lover)}/>
                </td>
                <td>
                  <div className="flex flex-row gap-2">
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
            <th></th>
            <th></th>
            <th className="text-lg">{displaySumPercentage()}</th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
  );
}
export default LoverTable;