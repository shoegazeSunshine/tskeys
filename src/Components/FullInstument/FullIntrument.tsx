import { InstrumentContextProvider } from "../../state/Instrument/Provider"
import { InstrumentSelector } from "../InstrumentSelector/InstrumentsSelector"
import { KeysWithInstr } from "../KeyWithInstr/KeysWithInstr"

export const FullInstrument = () => {
    return (
        <InstrumentContextProvider>
            <div className="playground">
                <KeysWithInstr />
                <InstrumentSelector />
            </div>
        </InstrumentContextProvider>
    )
}
