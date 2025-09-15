//* Type assertion - forced type declaration of an entity (variable, function, etc.).

import type { ITrack } from "./music.types";

const audioElement = document.getElementById(
    "audio"
) as HTMLAudioElement | null;
const progressBar = document.querySelector(
    ".progress"
) as HTMLDivElement | null;

//? Note that we are declaring a type by using "as" syntax. But we definitely should know the type of the variable before using it.

interface ISpotifyResponse {
    tracks: ITrack[];
}

export async function fetchTracks(): Promise<ITrack[]> {
    const response = await fetch("https://api.spotify.com/v1/me/tracks");
    const data = (await response.json()) as ISpotifyResponse;

    return data.tracks;
}
//* In this example we ar creating type for response as interface (array of tracks). Function fetchTracks accepts nothing as an arguments, but should return promise that resolves to an array of ITrack objects. First we fetch data from Spotify API, convert it from JSON (another promise) to an object and then we assert that the type of the data is ISpotifyResponse (object, which has a property "tracks" with array of ITrack inside).

//? Note that fetch() doesn't support typization, but we can use type assertion to declare the type of a variable "data" (final result of the fetch function). Important to know exactly - which type of data we should expect from the backend.
