import React, {
  memo,
  useCallback,
  useState,
} from "react"
import MaskInput from "../../MaskInput"

import styles from "./Input.module.scss"

interface IProps {
  mask: string;
  separators: string[];
  name: string;
}

export const Input = ({ mask, separators, name }: IProps) => {
  const [value, setValue] = useState("")

  const onChange = useCallback((
    value: string,
    // originalValue
  ) => {
    // const [separator] = separators
    // const [dayValue, monthValue, yearValue] = value.split(separator)

    setValue(value)
  }, [setValue])

  return (
    <div className={styles.inputContainer}>
      <MaskInput
        value={value}
        mask={mask}
        name={name}
        separators={separators}
        onChange={onChange}
        modifiers={styles.input}
      />
    </div>
  )
}

export default memo(Input)
