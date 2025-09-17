import type { MouseEvent } from "react";

interface Props {
    onSeek: (playingTime: number) => void;
}

export function PlayerControls({ onSeek }: Props) {
    const handleProgressClick = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        onSeek(percent * 100);
    };

    return (
        <div className="controls">
            <div>Some other controls</div>

            <div
                className="progress-bar"
                onClick={handleProgressClick}
            />
        </div>
    );
}
//* Example of the component with mouse event handler (clicking on the specific place of the progress bar calls function which changes the current time of the playing track).

/*
 * 1. Receiving the object "rect" with coords and size of the progress bar container (using getBoundingClientRect() method).
 * 2. Calculating the position of the mouse click (clientX) relative to the progress bar container (rect.left - left side of the container). Dividing this value by the width of the container (rect.width) and multiplying by 100 gives the percentage of the progress bar that was clicked.
 * 3. Calling the onSeek function with the percentage of the progress bar that was clicked (onSeek) to change the current time of the playing track on this calculated value.
 */
