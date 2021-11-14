import React, {
  memo,
  useCallback,
  useState,
} from "react"
import MaskInput, { TMaskProps } from "../../MaskInput"

import styles from "./Input.module.scss"

export interface IProps extends Pick<TMaskProps, "validators"> {
  mask: string;
  separators: string[];
  name: string;
  withErrors?: boolean;
}

export const Input = ({ mask, separators, name, validators, withErrors }: IProps) => {
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
        validators={validators}
        withErrors={withErrors}
      />
    </div>
  )
}

export default memo(Input)
