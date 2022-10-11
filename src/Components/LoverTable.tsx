import React, { useState } from 'react';
import { LoverInterface } from "./Form";

interface LoverTableInterface {
  lovers: LoverInterface[];
  deleteLover: (index: number) => void;
  changeLover: (index: number, newLover: LoverInterface) => void;
  toggleLover: (index: number) => void;
}

function LoverTable({ lovers, deleteLover, changeLover, toggleLover } : LoverTableInterface) {


  function onChangeLoverRate(index: number, value: string, lover: LoverInterface) {
    changeLover(index, {...lover, percentage: parseInt(value)});
  }

  function onChangeLoverName(index: number, value: string, lover: LoverInterface) {
    changeLover(index, {...lover, name: value});
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead className="bg-warning-content">
          <tr className="text-black">
            <th>Name</th>
            <th>Love's rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        { lovers.map((lover, index) => {
          return (
              <tr className="text-neutral">
                <td>
                  {
                    lover.edited ?
                    <input
                      type="text"
                      className="input input-bordered"
                      onBlur={(e) => onChangeLoverName(index, e.target.value, lover)}
                    />
                    :
                    lover.name
                  }

                </td>
                <td>
                  {
                    lover.edited ?
                    <input
                      type="number"
                      className="input input-bordered"
                      min="1"
                      max="100"
                      onBlur={(e) => onChangeLoverRate(index, e.target.value, lover)}
                    />
                    :
                    lover.percentage + " %"
                  }
                </td>
                <td>
                  {
                    lovers.length > 1 ?
                      <button onClick={() => toggleLover(index)}>🖊️</button>
                    : <></>
                  }
                  <button onClick={() => deleteLover(index)}>🗑️</button>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
}
export default LoverTable;