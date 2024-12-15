export default function DynamicDrawing({ height = 0, width = 0, floorDistance = 0 }) {
    const SVG_SIZE = 400;
    const rectScalingFactor = 0.6;
    const minRectHeight = 100;
    const scaledHeight = Math.max(height * rectScalingFactor, minRectHeight);
    const scaledWidth = SVG_SIZE * rectScalingFactor;
    const scaledFloorDistance = floorDistance > 0 ? floorDistance : 0;

    return (
        <svg width={SVG_SIZE} height={SVG_SIZE} style={{ borderBottom: "1px solid black" }}>
            <rect 
                x={(SVG_SIZE - scaledWidth) / 2}
                y={50}
                width={scaledWidth}
                height={scaledHeight}
                fill="white"
                stroke="black"
                strokeWidth="2"
            />
            <text 
                x={(SVG_SIZE - scaledWidth) / 2} 
                y={40}
                textAnchor="start" 
                alignmentBaseline="middle"
                fontSize="16"
                fill="black"
            >
                Width: {width}"
            </text>
            <text 
                x={((SVG_SIZE - scaledWidth) / 2 + scaledWidth) - 5} 
                y={scaledHeight / 2 + 50}
                textAnchor="end" 
                alignmentBaseline="middle"
                fontSize="16"
                fill="black"
            >
                Height: {height}"
            </text>
            {scaledFloorDistance > 0 && (
                <>
                    <line 
                        x1={SVG_SIZE / 2}
                        y1={50 + scaledHeight} 
                        x2={SVG_SIZE / 2}
                        y2={SVG_SIZE} 
                        stroke="black"
                        strokeWidth="1"
                    />
                    <text 
                        x={SVG_SIZE / 2 + 5} 
                        y={(50 + scaledHeight + SVG_SIZE) / 2}
                        textAnchor="start" 
                        alignmentBaseline="middle"
                        fontSize="16"
                        fill="black"
                    >
                        Floor Distance: {scaledFloorDistance}"
                    </text>
                </>
            )}
        </svg>
    );
}