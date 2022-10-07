import React, { useState } from 'react';
import { LoverInterface } from "./Form";

interface LoverTableInterface {
  lovers: LoverInterface[];
}

function LoverTable({ lovers } : LoverTableInterface) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead className="bg-warning-content">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
        
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
        
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default LoverTable;