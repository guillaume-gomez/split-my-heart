import React, { useRef, useEffect } from 'react';

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

    useEffect(() => {
        renderPieChart();
    }, [loversData]);

    function renderPieChart() {
        if(!canvasRef.current) {
            return;
        }

        const context = canvasRef.current.getContext("2d");
        if(!context) {
            return;
        }

        const total = loversData.reduce((sum, {percentage}) => sum + percentage, 0);
        console.log(total)
        let currentAngle = 0;

        for (let lover of loversData) {
            console.log(lover)
            //calculating the angle the slice (portion) will take in the chart
            let portionAngle = (lover.percentage / total) * 2 * Math.PI;
            //drawing an arc and a line to the center to differentiate the slice from the rest
            context.beginPath();
            context.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);
            currentAngle += portionAngle;
            context.lineTo(100, 100);
            //filling the slices with the corresponding mood's color
            context.fillStyle = lover.color;
            context.fill();
        }
    }

    return (
        <div className="card bg-base-300">
            <canvas width="700" height="700" ref={canvasRef} />
        </div>
    );
}

export default SplitMyHeartCanvas;