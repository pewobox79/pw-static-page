export default function HorizontalLine({borderColor, position, borderHeight, borderWidth, borderStyle,}) {
    let linePosition = position;
    if (!position) {
        linePosition = 'center';
    }

    let lineColor = borderColor;
    if (!borderColor) {
        lineColor = 'lightgray';
    }

    let lineWidth = borderWidth;
    if (!borderWidth) {
        lineWidth = '100%';
    }
    return (
        <hr
            style={{
                width: `${lineWidth}`,
                border: `${borderHeight} ${borderStyle} ${lineColor}`,
            }}
        />
    );
}
