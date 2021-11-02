import React from "react"
import BirthdayInput from "./BirthdayInput/BirthdayInput"

import styles from "./Main.modules.scss"

function Main() {
    return (
        <div className={styles.main}>
            <BirthdayInput />
        </div>
    )
}

export default Main;
