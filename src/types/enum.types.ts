//* enum - type of data, which can be used as a defined value

enum EnumAudioQuality {
    LOW = "96",
    MEDIUM = "160",
    HIGH = "320",
    LOSSLESS = "FLAC",
}

// let q: EnumAudioQuality;
// q = EnumAudioQuality.LOW; // "96"
// q = "96"; // error - EnumAudioQuality.LOW is not a string

//* This original implementation has an issues: generation of the whole JS file even if we needs only the type (and increeases the size of the bundle), non-flexible (can't be expanded or used as an object), non-extendable (can't be used as a union type (|)).

export const AudioQuality = {
    LOW: "96",
    MEDIUM: "160",
    HIGH: "320",
    LOSSLESS: "FLAC",
} as const;

export type TAudioQuality = (typeof AudioQuality)[keyof typeof AudioQuality]; //* '96' | '160' | '320' | 'FLAC'

let q: TAudioQuality;
q = AudioQuality.LOW;
q = AudioQuality.HIGH;
q = "96"; //* Also possible, because using type, based on the literal object

//* By using 'as const' we are creating a readonly literal object (where values appears to be the types, not strings), from which we can create a type TAudioQuality using keyof operator ("96" | "160" | "320" | "FLAC" - union type). More flexible approach - can be expanded or used as an object (AudioQuality), can be used as a union type (TAudioQuality). In other words - mix of enum + union types.
