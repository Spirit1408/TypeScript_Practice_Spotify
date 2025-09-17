import type { ITrack } from "./music.types";

export const recentlyPlayed: ITrack[] = [];
//* Array to store recently played tracks

export const topTracks: ReadonlyArray<ITrack> = [];
//* Array to store user's top tracks. Using "ReadonlyArray" utility type to prevent modification of the array.

//? const [user, setUser] = useState(string); - example of tuple. Tuple - array with fixed number of elements where each element can have different type.

type TAudioVizualizerBar = [frequency: number, amplitude: number];
//* Tuple type representing a single bar in an audio visualizer with frequency and amplitude.

export const bars: TAudioVizualizerBar[] = [
    [60, 0.8],
    [120, 0.6],
    [240, 0.9],
];
//* Array of audio visualizer bars, each represented by a tuple of frequency and amplitude. Adding more elements to the tuple will cause a type error.

type TTimeFormat = [minutes: string, seconds: string];
//* Tuple type representing time in minutes and seconds.

export const timeFormat: TTimeFormat = ["00", "00"];

function formatDuration(duration: number): TTimeFormat {
    const minutes = Math.floor(duration / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (duration % 60).toString().padStart(2, "0");
    return [minutes, seconds];
}
//* Function to format duration from seconds to a tuple of minutes and seconds. Accepts duration in seconds (as a number) and returns a TTimeFormat tuple.

formatDuration(245);
//* returns ["04", "05"]

//TODO File for representative use!