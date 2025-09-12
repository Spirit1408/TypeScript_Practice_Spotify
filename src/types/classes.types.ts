import type { ITrack } from "./music.types";
import type { IPlayerState } from "./player.types";
import { Howl } from "howler";

export class SpotifyPlayer {
    private audio: Howl | null = null;
    private state: IPlayerState;

    constructor() {
        this.state = {
            currentTrack: null,
            queue: [],
            history: [],
            isPlaying: false,
            volume: 0.7,
            currentTime: 0,
            repeatMode: "none",
            isShuffling: false,
        };
    }

    playing(track?: ITrack): void {
        if (track) {
            this.loadTrack(track);
        }
        this.audio?.play();
        this.state.isPlaying = true;
    }

    private loadTrack(track: ITrack): void {
        this.audio = new Howl({
            src: [track.audioUrl],
            volume: this.state.volume,
        });
        this.state.currentTrack = track;
        this.state.history.push(track);
    }

    pause(): void {
        this.audio?.pause();
        this.state.isPlaying = false;
    }

    stop(): void {
        this.audio?.stop();
        this.state.isPlaying = false;
    }

    seeking(time: number): void {
        this.audio?.seek(time);
        this.state.currentTime = time;
    }

    volumeUp(): void {
        this.state.volume += 0.1;
        this.audio?.volume(this.state.volume);
    }

    volumeDown(): void {
        this.state.volume -= 0.1;
        this.audio?.volume(this.state.volume);
    }
}

//* Class for playing audio (using Howler.js library). contains two private properties: audio (Howl object or null) and state (IPlayerState object). In constructor setting initial state of the player. Contains some methods: play (to play a track), seek (to seek to a specific time in the track), private method loadTrack (to load a track, using in play() method), pause (to pause the track), volumeUp (to increase the volume), volumeDown (to decrease the volume) and stop (to stop the playing track).

//? Note that play(), seek(), pause() and volume() - are the methods of the Howl object. And if audio variable is not null, means that audio is loaded and has a Howl type - methods play() and seek() will be available to use.

//TODO 
