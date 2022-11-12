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

    useOnWindowResize(() => renderPieChart());
    useEffect(() => {
        renderPieChart();
    }, [loversData]);

    function renderPieChart() {
        if(!canvasRef.current) {
            return;
        }
        const offset = 100;
        const canvasSize = Math.min(
            window.innerHeight - offset,
            10000000
        );
        canvasRef.current.width = canvasSize
        canvasRef.current.height = canvasSize;

        const context = canvasRef.current.getContext("2d");
        if(!context) {
            return;
        }

        const margin = 10;
        const radius = (Math.min(canvasRef.current.width, canvasRef.current.height)/2) - margin;

        const total = loversData.reduce((sum, {percentage}) => sum + percentage, 0);
        let currentAngle = 0;



/*    const width = canvasSize - 200;
    const height = canvasSize - 200;
    const lineWidth = 10;
    context.strokeStyle = "#000000";
    (context as any).strokeWeight = 3;
    context.shadowOffsetX = 4.0;
    context.shadowOffsetY = 4.0;
    context.lineWidth = lineWidth;
    context.fillStyle = "#FF0000";
    const heartSize = Math.min(width - lineWidth, height - lineWidth);
    const heartOffset = lineWidth/2 + 200/2;
    context.moveTo(heartOffset, heartOffset + heartSize / 4);
    context.quadraticCurveTo(heartOffset, heartOffset, heartOffset + heartSize / 4, heartOffset);
    context.quadraticCurveTo(heartOffset + heartSize / 2, heartOffset, heartOffset + heartSize / 2, heartOffset + heartSize / 4);
    context.quadraticCurveTo(heartOffset + heartSize / 2, heartOffset, heartOffset + heartSize * 3/4, heartOffset);
    context.quadraticCurveTo(heartOffset + heartSize, heartOffset, heartOffset + heartSize, heartOffset + heartSize / 4);
    context.quadraticCurveTo(heartOffset + heartSize, heartOffset + heartSize / 2, heartOffset + heartSize * 3/4, heartOffset + heartSize * 3/4);
    context.lineTo(heartOffset + heartSize / 2, heartOffset + heartSize);
    context.lineTo(heartOffset + heartSize / 4, heartOffset + heartSize * 3/4);
    context.quadraticCurveTo(heartOffset, heartOffset + heartSize / 2, heartOffset, heartOffset + heartSize / 4);
    context.stroke();
    context.fill();*/


     // set global composite - destination-atop
     context.globalCompositeOperation = 'destination-atop';

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

     /*    context.beginPath();
     context.rect(100, 20, 100, 100);
     context.fillStyle = 'green';
     context.fill();
    // set global composite - destination-atop
     context.globalCompositeOperation = 'destination-atop';
     // draw red circle (source)
     context.beginPath();
     context.arc(190, 120, 60, 0, 2 * Math.PI, false);
     context.fillStyle = 'red';
     context.fill();*/


    }

    return (
        <div className="card bg-base-300">
            <canvas ref={canvasRef} />
        </div>
    );
}

export default SplitMyHeartCanvas;