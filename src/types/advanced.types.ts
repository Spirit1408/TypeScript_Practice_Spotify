import type { IArtist, IBase, ITrack } from "./music.types";

export type ExtractArrayType<T> = T extends (infer U)[] ? U : never;
//* ExtractArrayType - creates a type by extracting type of the element (U) of the specified array (generic T). Literally - if T is an array of elements of type U, then U will be extracted from T. Otherwise returns nothing ("never").

export type TrackType = ExtractArrayType<ITrack[]>;
//* ExtractArrayType<ITrack[]> - example, creates a type by extracting type of the element (ITrack) of the specified array (ITrack[]). So in type TrackType we get ITrack type. Useful if we need to extract type of the element of the array with unknown type of its elements.

//==================================================================================

type Optional<T> = {
    [P in keyof T]?: T[P];
};
//* Creates type by making all the properties of the original type optional (like Partial<>).

type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};
//* Creates type by making all the properties of the original type nullable (like Required<>).

export type TrackDraft = Optional<ITrack>;
//* Creates type by making all the properties of the ITrack as optional (or exists or undefined).

export type NullableTrack = Nullable<ITrack>;
//* Creates type by making all the properties of the ITrack as nullable (or exists or null).

//==================================================================================

type Getters<T> = {
    [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K];
};

export type ArtistGetters = Getters<Omit<IArtist, keyof IBase>>; //* Creates type by adding "get" prefix to all the properties of the IArtist object (except id, createdAt, updatedAt from IBase). And value of the property will be a function, which returns the type of the original type's property (like "getName: () => string;", for example).

export type isVerified = ArtistGetters["getIsVerified"]; //* Function which returns "boolean" type
