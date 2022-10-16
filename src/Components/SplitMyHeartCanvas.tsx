import React, { useRef, useEffect } from 'react';


function SplitMyHeartCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        renderPieChart();
    }, []);

    function renderPieChart() {
        if(!canvasRef.current) {
            return;
        }

        const context = canvasRef.current.getContext("2d");
        if(!context) {
            return;
        }

        const results = [
            {mood: "Angry", total: 1499, shade: "#0a9627"},
            {mood: "Happy", total: 478, shade: "#960A2C"},
            {mood: "Melancholic", total:332, shade: "#332E2E"},
            {mood: "Gloomy", total: 195, shade: "#F73809"}
        ];

        const totalNumberOfPeople = results.reduce((sum, {total}) => sum + total, 0);
        let currentAngle = 0;

        for (let moodValue of results) {
            //calculating the angle the slice (portion) will take in the chart
            let portionAngle = (moodValue.total / totalNumberOfPeople) * 2 * Math.PI;
            //drawing an arc and a line to the center to differentiate the slice from the rest
            context.beginPath();
            context.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);
            currentAngle += portionAngle;
            context.lineTo(100, 100);
            //filling the slices with the corresponding mood's color
            context.fillStyle = moodValue.shade;
            context.fill();
        }
    }

    return (
        <canvas ref={canvasRef} />
    );
}

export default SplitMyHeartCanvas;