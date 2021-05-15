import { OctaveIndex, PitchIndex } from "./note"

export type Key = string
export type Keys = Key[]

export const BOTTOM_ROW: Keys = Array.from("q2w3er5t6y7u")
export const TOP_ROW: Keys = Array.from("zsxdcvgbhnjm")

export function selectKey(octave: OctaveIndex, index: PitchIndex) {
    const keyRow = octave < 5 ? BOTTOM_ROW : TOP_ROW
    return keyRow[index]
}
