//* Generics - type, using a type parameter (T) to represent a type. Can be used to create a reusable type (like interface) that can be used with different types. In other words, function will accept specific type of data and returns the same type of data (for example). Like packing some objects into the box. Box will be the same, but objects can be different. Generics - way to create a reusable type that can be used with different types.

import type { ITrack } from "./music.types";
import type { IPlaylist } from "./playlist.types";

async function fetchFromSpotify<T>(
    endpoint: string,
    params?: Record<string, string>
): Promise<T> {
    const url = new URL(endpoint, "https://api.spotify.com/v1/");

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }

    const response = await fetch(url.toString());

    const data = (await response.json()) as { data: T };

    return data.data;
}
//* Function for fetching data from Spotify API (from different endpoints). Accepts endpoint (exact path of the API, from which we want to fetch specific data) and optional search parameters (as an object like { q: "drake", type: "artist" }) as arguments, returns promise that resolves to an object of type T. How does it works:

/*
 * 1. We create a URL object from the endpoint and base URL (https://api.spotify.com/v1/).
 * 2. If params are provided, we add them to the URL as query parameters (url entity has searchParams property, which is a Map object, so we can use Object.entries() to iterate over the params object and append each key-value pair to the URL).
 * 3. We fetch the data from the URL (converted to string) and return it as a promise.
 * 4. Converting response from JSON to an object and returning it as resolved promise as an object with property "data" of type T.
 * 5. Function returns extracted data (with type T) from that object.
 */

//? Note that we can use generic types to create reusable functions that can work with different types of data, without having to write separate functions for each type.

const track = await fetchFromSpotify<ITrack>("track", {
    id: "3n3Ppam7vgaVa1iaRUc9Lp",
});
//* Returns a track with type ITrack and id "3n3Ppam7vgaVa1iaRUc9Lp".

const playlist = await fetchFromSpotify<IPlaylist>("playlist", {
    limit: "10",
});
//* Returns a playlist with type IPlaylist and limit of 10.
