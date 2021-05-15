import { useRef, useState } from "react"
import Soundfont, { InstrumentName, Player } from "soundfont-player"
import { MidiValue } from "../domain/note"
import { AudioNodesRegistry, DEFAULT_INSTUMENT } from "../domain/sound"
import { Optional } from "../domain/types"

type Settings = {
    AudioContext: AudioContextType
}

interface SF_Features {
    loading: boolean
    current: Optional<InstrumentName>

    load(instrument?: InstrumentName): Promise<void>
    play(note: MidiValue): Promise<void>
    stop(note: MidiValue): Promise<void>
}

export function useSoundFont({ AudioContext }: Settings): SF_Features {
    let activeNodes: AudioNodesRegistry = {}
    const [current, setCurrent] = useState<Optional<InstrumentName>>(null)
    const [player, setPlayer] = useState<Optional<Player>>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const audio = useRef(new AudioContext())

    async function load(instrument: InstrumentName = DEFAULT_INSTUMENT) {
        if (loading || current === instrument) return

        setLoading(true)
        setCurrent(instrument)
        const player = await Soundfont.instrument(audio.current, instrument)
        setLoading(false)
        setPlayer(player)
    }

    async function resume() {
        return audio.current.state === "suspended"
            ? await audio.current.resume()
            : Promise.resolve()
    }

    async function play(note: MidiValue) {
        await resume()
        if (!player) return
        const node = player.play(note.toString())
        activeNodes = { ...activeNodes, [note]: node }
    }

    async function stop(note: MidiValue) {
        await resume()
        if (!activeNodes[note]) return
        activeNodes[note]!.stop()
        activeNodes = { ...activeNodes, [note]: null }
    }

    return { loading, current, load, play, stop }
}
