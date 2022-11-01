import React, { useRef, useEffect } from 'react';
import { useOnWindowResize } from "rooks";

export interface dataStats {
    name: string;
    percentage: number;
    color: string;
}

interface SplitMyHeartCanvasInterface {
    loversData: dataStats[];
}


function SplitMyHeartCanvas({ loversData } : SplitMyHeartCanvasInterface) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    //useOnWindowResize(() => console.log("window resized"));

    useEffect(() => {
        renderPieChart();
    }, [loversData]);

    function renderPieChart() {
        if(!canvasRef.current) {
            return;
        }
        canvasRef.current.width = 650;
        canvasRef.current.height = 650;

        const context = canvasRef.current.getContext("2d");
        if(!context) {
            return;
        }

        const margin = 10;
        const radius = (Math.min(canvasRef.current.width, canvasRef.current.height)/2) - margin;

        const total = loversData.reduce((sum, {percentage}) => sum + percentage, 0);
        let currentAngle = 0;



        for (let lover of loversData) {
            //calculating the angle the slice (portion) will take in the chart
            let portionAngle = (lover.percentage / total) * 2 * Math.PI;
            //drawing an arc and a line to the center to differentiate the slice from the rest
            context.beginPath();
            context.arc(radius + margin, radius + margin, radius, currentAngle, currentAngle + portionAngle);
            currentAngle += portionAngle;
            context.lineTo(radius + margin, radius + margin);
            //filling the slices with the corresponding mood's color
            context.fillStyle = lover.color;
            context.fill();
        }
    }

    return (
        <div className="card bg-base-300">
            <canvas ref={canvasRef} />
        </div>
    );
}

export default SplitMyHeartCanvas;