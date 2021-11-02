import React, {
    useState,
    useCallback,
    memo,
} from "react"
import MaskInput from "../../MaskInput"

import styles from "./BirthdayInput.module.scss"

export const mask = "DD/MM/YYYY"
const separators = ["/"]

export const BirthdayInput = () => {
    const [date, setDate] = useState("")

    const handleBirthDate = useCallback((value: string) => {
        const [separator] = separators
        const [dayValue, monthValue, yearValue] = value.split(separator)

        console.log("date:", dayValue, monthValue, yearValue)

        setDate(value)
    }, [setDate])

    return (
        <div className={styles.inputContainer}>
            <MaskInput
                value={date}
                mask={mask}
                name="fullBirthdayDate"
                separators={separators}
                onChange={handleBirthDate}
                modifiers={styles.input}
            />
        </div>
    )
}

export default memo(BirthdayInput)
