import { Optional } from "./types"
import { InstrumentName, Player } from "soundfont-player"
import { MidiValue } from "./note"

export const DEFAULT_INSTUMENT: InstrumentName = "acoustic_grand_piano"

export type AudioNodesRegistry = Record<MidiValue, Optional<Player>>
