import type { ITrack } from "./types/music.types";

interface Props {
    track: ITrack;
}

export function Track({ track }: Props) {
    return (
        <div>
            <h1>{track.title}</h1>
        </div>
    );
}
//* Sample of the component, which receives a track as a prop. But prop should be of type ITrack
