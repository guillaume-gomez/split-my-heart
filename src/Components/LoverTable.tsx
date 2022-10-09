import React, { useState } from 'react';
import { LoverInterface } from "./Form";

interface LoverTableInterface {
  lovers: LoverInterface[];
  deleteLover: (index: number) => void;
  changeLover: (index: number, newLover: LoverInterface) => void;
}

function LoverTable({ lovers, deleteLover, changeLover } : LoverTableInterface) {
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
                    <input />
                    :
                    lover.name
                  }

                </td>
                <td>
                  {
                    lover.edited ?
                    <input />
                    :
                    lover.percentage
                  }
                </td>
                <td>
                  {
                    lovers.length > 1 ?
                      <button onClick={() => changeLover(index, {...lover, edited: !lover.edited})}>🖊️</button>
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