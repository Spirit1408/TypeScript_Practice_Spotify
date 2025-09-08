import type { IBase, TImageUrl, ITrack, TId } from "./music.types";

export interface IPlaylist extends IBase {
    name: string;
    description?: string;
    tracks: ITrack[];
    coverImageUrl: TImageUrl;
    owner: {
        id: TId;
        displayName: string;
        isPremium: boolean;
    };
    isPublic: boolean;
    followers: number;
}
//* Interface for playlist entity. Takes fields from IBase and adds playlist-specific fields. For coverImage and owner's id uses TImageUrl and TId types respectively. Using '?' for optional fields (can be string or undefined).
