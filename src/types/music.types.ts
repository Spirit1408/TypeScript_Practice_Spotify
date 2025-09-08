type Id = string;
type ImageUrl = string;

//? type Duration = number;
//? type isPublished = boolean;
//? type Artist = null | string;
//? type Album = undefined | string;
//* Samples of typization using "type"

interface IBase {
    id: Id;
    createdAt: string;
    updatedAt: string;
} //* Some base interface for common fields

export interface IArtist extends IBase {
    name: string;
    imageUrl: ImageUrl;
    isVerified: boolean;
} //* Interface for artist entity (all the fields from IBase and "name", "imageUrl", "isVerified")

export interface ITrack {
    artist: IArtist;
    title: string;
    isPublished: boolean;
} //* Interface for track entity.

export interface ITrack {
    duration: number;
} //* This interface will be merged with the previous one (ITrack) and will have all the fields from both interfaces. Just for example of interface merging feature.
//! Using this exasmple with types won't work - will be an error of duplicate type names.

//==============================

//? type TBase = {
//?     id: Id;
//?     createdAt: string;
//?     updatedAt: string;
//? }; //* Some base type for common fields

//? type TArtist = TBase & {
//?     name: string;
//?     imageUrl: ImageUrl;
//?     isVerified: boolean;
//? }; //* Type for artist entity (all the fields from TBase and "name", "imageUrl", "isVerified")

//? type TTrack = {
//?     artist: TArtist;
//? }; //* Type for track entity

//* Interfaces and types - can use both (functionality is quite the same).
//
//? Difference in syntax (declaration and extension). Extension with "&" for types (can be chains with "&" if have more types to extend) and "extends" for interfaces (can be chains with "," if have more interfaces to extend). Another difference is that type can include just one type (or some options of it using "|") (as in example on top), but interface is always an object.

//TODO Better to use interfaces for typization of objects, types - for typization of primitives, unions and intersections.
