//* Utility types - types that are used to create new types based on existing types.

import type { IBase, ITrack, TId } from "./music.types";

export function updateTrack(
    trackId: TId,
    data: Partial<Omit<ITrack, keyof IBase>>
): void {
    console.log(`Updating track ${trackId} with data: ${data}...`);
}
//* Function for updating track. Takes track id (TId) and data (Partial<Omit<ITrack, keyof IBase>>) and logs the action. "data" argument will be an object of type ITrack, but with some fields omitted (propertites of IBase type, which we don't want to update). Partial - a type that is used to create a new type that has all the properties of the original type, but all of them are optional (can be used to send just data, which we want to update, and not the whole ITrack object).

//? Omit - type utility - creates a type by removing the specified properties from the original type. Uses original type as the first argument, and array of property names ("id"|"createdAt"|"updatedAt") as the second argument. Alternative way is to use "keyof" - type utility - creates a type by extracting the keys from the original type. Uses original type as an argument.
//? Partial - type utility - creates a type by making all the properties of the original type optional. Uses original type as an argument.

//==================================================================================

interface IUser {
    name?: string;
    age?: string;
    city?: string;
}

export type TUserProfile = Required<IUser>;
//* Required - Type utility - creates a type by making all the properties of the original type required. Uses original type as an argument.

//==================================================================================

export type TMainUserFields = Pick<IUser, "name" | "age">;
//* Pick - Type utility - creates a type by picking the specified properties from the original type. Uses original type as the first argument, and array of property names ("name"|"age") as the second argument. Hint - in this example we also can use IUser as original type, but should wrap it in Required<> to make all the picked properties of IUser required, as they are optional by default.

//==================================================================================

type TUserDictionary = Record<string, string[]>;
//* Record - Type utility - creates a type, where key and value types are specified.

export const userDict: TUserDictionary = {
    name: ["Имя", "Фамилия"],
    age: ["Возраст", "Год рождения"],
    city: ["Город", "Город проживания"],
};

//==================================================================================

type IUserData = Readonly<{ name: string; age: number; city: string }>;
//* Readonly - Type utility - creates a type by making all the properties of the original type readonly. Uses original type as an argument.

export const user: IUserData = {
    name: "John",
    age: 30,
    city: "New York",
};
//* Readonly object - can't be modified, but can be read.

//! console.log((user.name = "John")); //? Error

//==================================================================================

export type TUpdateTrackResponse = ReturnType<typeof updateTrack>;
//* ReturnType - Type utility - creates a type by extracting the return type of the specified function. Uses function as an argument. In this example equals to "void", as updateTrack function returns void.

//==================================================================================

export type TUpdateTrackParams = Parameters<typeof updateTrack>;
//* Parameters - Type utility - creates a type by extracting the parameters of the specified function. Uses function as an argument. In this example equals to [trackId: string, data: {    artist?: IArtist | undefined; title?: string | undefined; isPublished?: boolean | undefined; audioUrl?: string | undefined; duration?: number | undefined;}]
