import { Optional } from "./types"
export function accesContext(): Optional<AudioContextType> {
    return window.AudioContext || window.webkitAudioContext || null
}
