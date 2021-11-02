import React, { useState, useCallback } from "react"
import MaskInput from "../../MaskInput"

import styles from "./FormInput.module.scss"

const mask = "xxx (xx) xxx xx";
const separators = [" ", "(", ")"];

function FormInput() {
    const [value, setValue] = useState("")

    const onChange = useCallback((value) => {
        setValue(value)
    }, [setValue])

    return (
        <form className={styles.form}>
            <MaskInput
                value={value}
                mask={mask}
                separators={separators}
                onChange={onChange}
                placeholder="fake-placeholder"
                modifiers={styles.input}
            />
        </form>
    );
}

export default FormInput;
