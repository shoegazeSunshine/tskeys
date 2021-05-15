import { useAudioContext } from "../AppContextProvider/useAudioContext"
import { ErrorMessage } from "../ErrorMessage/ErrorMesage"
import { FullInstrument } from "../FullInstument/FullIntrument"

export const Main = () => {
    const AudioContext = useAudioContext()
    return !!AudioContext ? <FullInstrument /> : <ErrorMessage />
}
