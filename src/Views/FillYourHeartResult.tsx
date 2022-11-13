import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from "react-router-dom";
import SplitMyHeartCanvas, { dataStats } from "../Components/SplitMyHeartCanvas";
import { LoverInterface } from "../Components/Form";
import { LoverApiInterface } from "./FillYourHeart";
import Legend from "../Components/Legend";



function FillYourHeartResult() {
  const [searchParams] = useSearchParams();
  const [loversData, setLoversData] = useState<dataStats[]>([]);
  const [name, setName] = useState<string>();
  const [displayClipboardMessage, setDisplayClipboardMessage] = useState<boolean>(false);

  useEffect(() => {
    const stringifiedParam = searchParams.get('params');
    if(!stringifiedParam) {
      return;
    }
    const newResults = parseParam(stringifiedParam);
    setLoversData(newResults);

    const nameParam = searchParams.get('name');
    if(!nameParam) {
      return;
    }
    setName(nameParam);
  }, [searchParams]);

  function parseParam(stringifiedParam :string) :dataStats[] {
    const lovers : LoverApiInterface[] = JSON.parse(stringifiedParam);
    return lovers.map(lover => {
      return {name: lover.n, percentage: lover.p, color: lover.c };
    });
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    setDisplayClipboardMessage(true);
    // danger ! use setTimeout in react :sweat_smile:
    setTimeout(() => setDisplayClipboardMessage(false), 2500);
  }

  return (
    <div className="w-full flex flex-col items-center gap-7">
      <div className="flex flex-col gap-3 justify-center">
        <div className="card bg-base-300">
          <div className="card-body">
            <h2>What's the
              <span className="font-bold px-1">{name}'s</span>
               heart looks like ? 💜
            </h2>
          </div>
        </div>
        <SplitMyHeartCanvas loversData={loversData}/>
        <Legend loversData={loversData}/>
      </div>
      <div className="indicator">
        {displayClipboardMessage && <span className="indicator-item badge badge-secondary">Copied on the clipboard</span>}
        <div className="btn btn-primary btn-lg" onClick={copyToClipboard}> 🔗 Share the link </div>
      </div>
      <Link to="/" className="btn btn-link">Create a new one</Link>
    </div>
  );
}

export default FillYourHeartResult;
