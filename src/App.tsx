import React from "react"
import styles from "./App.module.css"
import { Main } from "./Components/Main/Main"
import { notes } from "./domain/note"

function App() {
    console.log(notes)
    return (
        <div className={styles.app}>
            <Main />
        </div>
    )
}

export default App
