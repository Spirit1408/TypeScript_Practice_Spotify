import type { ITrack } from "./music.types";

export interface IPlayerState {
    currentTrack: ITrack | null;
    queue: ITrack[];
    history: ITrack[];
    isPlaying: boolean;
    volume: number;
    currentTime: number;
    repeatMode: "none" | "one" | "all";
    isShuffling: boolean;
}
//* Interface for player state in the application. ITrack[] - array of ITrack objects. Another syntax is Array<ITrack>. repeatMode - union type directly in the interface, accepts strings only with specific values.
