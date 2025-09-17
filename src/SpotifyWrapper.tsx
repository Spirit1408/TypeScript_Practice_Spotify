import { use, useRef, useState, type ReactNode } from "react";
import type { IArtist, ITrack } from "./types/music.types";

export function SpotifyWrapper({ children }: { children: ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);
    const [queue, setQueue] = useState<ITrack[]>([]);
    const [singer, setSinger] = useState<IArtist>({} as IArtist);
    const [volume, setVolume] = useState<number>(0.7);

    const audioRef = useRef<HTMLAudioElement>(null);

    return (
        <div>
            <header>Some header of current wrapper</header>

            {children}
        </div>
    );
}
//* Component-wrapper, which receives children as a prop. We can declare children's type as ReactNode or PropsWithChildren "{ children }: PropsWithChildren".

//* Working with hooks typization through generics. States will accepts ITrack or null (if track isnt playing), array of ITrack or empty array (if queue is empty), object IArtist (by default empty, but has type IArtist) and volume with type number (by default 0.7).

//* useRef() hook returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. In this example, we use it to store a reference to the audio element (audioRef), so we should declare its type as HTMLAudioElement.
