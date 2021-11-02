import React from "react"
import BirthdayInput from "../BirthdayInput"

import styles from "./Main.module.scss"

function Main() {
    return (
        <div className={styles.main}>
            <p className={styles.birthdayText}>Birthday</p>
            <BirthdayInput />
        </div>
    )
}

export default Main
