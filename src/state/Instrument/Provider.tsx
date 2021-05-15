import { DEFAULT_INSTUMENT } from "./../../domain/sound"
import { useState } from "react"
import { FunctionComponent } from "react"
import { InstrumentContext } from "./Context"

export const InstrumentContextProvider: FunctionComponent = ({ children }) => {
    const [instrument, setInstrument] = useState(DEFAULT_INSTUMENT)

    return (
        <InstrumentContext.Provider value={{ instrument, setInstrument }}>
            {children}
        </InstrumentContext.Provider>
    )
}
