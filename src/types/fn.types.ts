import type { ITrack } from "./music.types";

type TPlaySong = (track: string) => void;
//* Type alias for a function that takes a track (string) and returns void (because it doesn't return anything). Represents a function to play a song.

type TVolumeChange = (volume: number) => void;
//* Type alias for a function that takes a volume level (number) and returns void. Represents a function to change the volume.

const play: TPlaySong = (track) => {
    console.log(`Playing track: ${track}`);
};
//* function implementation for playing a song. Takes a track (string) and logs the action. Returns void. Note that for arrow functions we can use type aliases (TPlaySong).

//? function changeVolume(volume: number): void {
//?     if (volume < 0 || volume > 100) {
//?         console.warn("Volume must be between 0 and 100.");
//?         return;
//?     }
//?     console.log(`Changing volume to: ${volume}`);
//? }
//* Function implementation for changing volume. Takes a volume level (number) and logs the change. Returns void. For regular functions we specify the return type after the parameter list. Also we can't use type aliases (TVolumeChange) here (how we do it with arrow functions).

const changeVolumeArrow: TVolumeChange = function (volume) {
    if (volume < 0 || volume > 100) {
        console.warn("Volume must be between 0 and 100.");
        return;
    }
    console.log(`Changing volume to: ${volume}`);
};
//* Function implementation for changing volume using a function expression. Takes a volume level (number) and logs the change. Returns void. Here we can use the type alias for the function type. Alternative (but not recommended) way to define functions in TS.

function addToQueue(
    track: ITrack,
    position: number = 1,
    isPlayNext: boolean = false
): void {
    console.log(
        `Adding track: ${track} to position: ${position}. Play next: ${isPlayNext}`
    );
}
//* Function to add a track to the playback queue. Takes a track (ITrack), an optional position (number, default 1), and an optional isPlayNext (boolean, default false). Returns void. Demonstrates optional parameters with default values.

//TODO File for representative use of function types. Can be expanded with more complex examples as needed.
