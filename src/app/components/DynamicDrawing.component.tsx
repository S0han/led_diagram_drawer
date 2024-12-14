export default function DynamicDrawing({ height, width, floorDistance }) {
    const SVG_SIZE = 600;    
    
    const scalingFactor = Math.max(width, height, floorDistance) > 0
        ? SVG_SIZE / Math.max(width, height, floorDistance) : 1;

    return (
        <svg width={SVG_SIZE} height={SVG_SIZE} style={{ border: "1px solid black" }}></svg>
    )
}