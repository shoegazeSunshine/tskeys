import { ChangeEvent } from "react"
import { InstrumentName } from "soundfont-player"
import { useInstrument } from "../../state/Instrument/Context"
import styles from "./InstrumentSelector.module.css"
import { options } from "./options"

export const InstrumentSelector = () => {
    const { instrument, setInstrument } = useInstrument()
    const updateInstrument = ({ target }: ChangeEvent<HTMLSelectElement>) => {
        setInstrument(target.value as InstrumentName)
    }
    return (
        <select
            className={styles.instruments}
            onChange={updateInstrument}
            value={instrument}
        >
            {options.map(({ label, value }) => (
                <option value={value} key={value}>
                    {label}
                </option>
            ))}
        </select>
    )
}
