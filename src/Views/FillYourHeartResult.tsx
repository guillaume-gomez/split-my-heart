import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from "react-router-dom";
import SplitMyHeartCanvas, { dataStats } from "../Components/SplitMyHeartCanvas";
import { LoverInterface } from "../Components/Form";
import Legend from "../Components/Legend";



function FillYourHeartResult() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [loversData, setLoversData] = useState<dataStats[]>([]);
  const [displayClipboardMessage, setDisplayClipboardMessage] = useState<boolean>(false);

  useEffect(() => {
    const stringifiedParam = searchParams.get('params');
    if(!stringifiedParam) {
      return;
    }
    const newResults = parseParam(stringifiedParam);
    setLoversData(newResults);
  }, [searchParams]);

  function parseParam(stringifiedParam :string) :dataStats[] {
    const lovers : LoverInterface[] = JSON.parse(stringifiedParam);
    return lovers.map(lover => {
      return {name: lover.name, percentage: lover.percentage, color: lover.color };
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
      <div className="flex flex-col gap-3">
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
