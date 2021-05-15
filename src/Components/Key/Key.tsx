import clsx from "clsx"
import { FunctionComponent, ReactEventHandler } from "react"
import { NoteType } from "../../domain/note"
import { usePressObserver } from "../../PressObserver/usePressObserver"
import styles from "./Key.module.css"

interface KeyProps {
    type: NoteType
    label: string
    disabled?: boolean

    onUp: ReactEventHandler<HTMLButtonElement>
    onDown: ReactEventHandler<HTMLButtonElement>
}

export const Key: FunctionComponent<KeyProps> = ({
    type,
    label,
    onDown,
    onUp,
    ...rest
}) => {
    const pressed = usePressObserver({
        watchKey: label,
        onStartPress: onDown,
        onFinishPress: onUp,
    })
    console.log(label, " : ", pressed)
    return (
        <button
            className={clsx(
                styles.key,
                styles[type],
                pressed && styles.pressed
            )}
            onMouseDown={onDown}
            onMouseUp={onUp}
            type="button"
            {...rest}
        >
            {label}
        </button>
    )
}
