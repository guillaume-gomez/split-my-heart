import React, { useRef, useEffect, useState } from 'react';
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
    const [realiticView, setRealiticView] = useState<boolean>(false);

    useOnWindowResize(() => renderPieChart());
    useEffect(() => {
        renderPieChart();
    }, [loversData, realiticView]);

    function renderPieChart() {
        if(!canvasRef.current) {
            return;
        }
        const canvasSize = (window.innerHeight * 0.5)
        canvasRef.current.width = canvasSize
        canvasRef.current.height = canvasSize;

        const context = canvasRef.current.getContext("2d");
        if(!context) {
            return;
        }

        if(realiticView) {
            drawPieChart(context, canvasSize, 250);
        } else {
            drawHeart(context, canvasSize);
            // set global composite - destination-atop
            context.globalCompositeOperation = 'source-atop';
            drawPieChart(context, canvasSize, 0);
        }
        
    }

    function drawPieChart(context: CanvasRenderingContext2D, canvasSize: number, offset: number) {
        const middle = canvasSize/2;
        const radius = canvasSize - offset;
        const total = loversData.reduce((sum, {percentage}) => sum + percentage, 0);
        let currentAngle = 0;
        for (let lover of loversData) {
            //calculating the angle the slice (portion) will take in the chart
            let portionAngle = (lover.percentage / total) * 2 * Math.PI;
            //drawing an arc and a line to the center to differentiate the slice from the rest
            context.beginPath();
            context.arc(middle, middle, radius, currentAngle, currentAngle + portionAngle);
            currentAngle += portionAngle;
            context.lineTo(middle, middle);
            //filling the slices with the corresponding mood's color
            context.fillStyle = lover.color;
            context.fill();
        }
    }

    function drawHeart(context: CanvasRenderingContext2D, canvasSize: number) {
        const offsetHeart = 20
        const width = canvasSize - offsetHeart;
        const height = canvasSize - offsetHeart;
        const lineWidth = 10;
        context.strokeStyle = "#000000";
        (context as any).strokeWeight = 3;
        context.shadowOffsetX = 4.0;
        context.shadowOffsetY = 4.0;
        context.lineWidth = lineWidth;
        context.fillStyle = "#FF0000";
        const heartSize = Math.min(width - lineWidth, height - lineWidth);
        const heartOffset = lineWidth/2 + offsetHeart/2;
        context.beginPath()
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
        context.fill();
    }

    return (
        <div className="card bg-base-300" style={{height: "50vh"}}>
            <canvas ref={canvasRef} />
            <div className="form-control absolute bottom-2 right-2">
                <label className="cursor-pointer label relative">
                  <span className="label-text">Realistic view</span>
                  <input type="checkbox" className="toggle toggle-primary" checked={realiticView} onChange={() => setRealiticView(!realiticView)} />
                </label>
            </div>
        </div>
    );
}

export default SplitMyHeartCanvas;