import type { IArtist, ITrack } from "./music.types";
import type { IPlaylist } from "./playlist.types";

function spotifyAPI(endpoint: "track", id: string): Promise<ITrack>;
//* Function connects to Spotify API and fetches data of the track. Returns a promise (async call) that resolves to an ITrack object.

function spotifyAPI(endpoint: "playlist", id: string): Promise<IPlaylist>;
//* Function connects to Spotify API and fetches data of the playlist. Returns a promise (async call) that resolves to an IPlaylist object.

function spotifyAPI(endpoint: "artist", id: string): Promise<IArtist>;
//* Function connects to Spotify API and fetches data of the artist. Returns a promise (async call) that resolves to an IArtist object.

function spotifyAPI(endpoint: string, id: string): Promise<unknown> {
    return fetch(`https://api.spotify.com/v1/${endpoint}/${id}`).then((res) =>
        res.json()
    );
}
//* Last endpoint - generic one - handles any other endpoints not specifically typed above. Returns a promise that resolves to an unknown type. In other words - we don't know what type of data will be returned, but if endpoint exists, it will be returned. Describimg the specific endpoints above helps with type safety for endpoints, which are really important for our application.

//? Note that functions has the same name but different parameters and return types. This is called function overloading.

const track = await spotifyAPI("track", "3n3Ppam7vgaVa1iaRUc9Lp");
const playlist = await spotifyAPI("playlist", "37i9dQZF1DXcBWIGoYBM5M");
const artist = await spotifyAPI("artist", "1vCWHaC5f2uS3yhpwWbIA6");
//* Samples of calling the overloaded function with different endpoints and IDs. The return types are inferred based on the overload signatures defined above.