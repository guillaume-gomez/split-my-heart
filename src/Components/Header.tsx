import React from 'react';
import { Link } from "react-router-dom";

function Header() {



  return (
  <div className="navbar bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-secondary btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
        <li><Link to={"/"}>Homepage</Link></li>
        <li><Link to={"/rawanita"}>Rawanita 💟 </Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to={"/"} className="btn btn-ghost normal-case text-xl">Split my heart</Link>
  </div>
  <div className="navbar-end">
  </div>
</div>
  );
}
export default Header;