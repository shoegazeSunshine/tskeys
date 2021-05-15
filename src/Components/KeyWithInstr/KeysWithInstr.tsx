import { useEffect } from "react"
import { useSoundFont } from "../../Soundfront/useSoundfont"
import { useInstrument } from "../../state/Instrument/Context"
import { useAudioContext } from "../AppContextProvider/useAudioContext"
import { Keyboard } from "../Keyboard/Keyboard"

export const KeysWithInstr = () => {
    const AudioContext = useAudioContext()!
    const { instrument } = useInstrument()
    const { load, loading, play, stop, current } = useSoundFont({
        AudioContext,
    })
    useEffect(() => {
        if (!loading && instrument !== current) load(instrument)
    }, [load, loading, current, instrument])

    return <Keyboard loading={loading} play={play} stop={stop} />
}
