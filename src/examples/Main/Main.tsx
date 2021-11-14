import React from "react"
import Input, { IProps as IInputProps } from "../Input/Input"

import styles from "./Main.module.scss"

interface IOption extends Partial<Pick<IInputProps, "validators">>{
  mask: string;
  separators: string[];
  name: string;
  description: string;
  withErrors?: boolean;
}

const isValidTime = (time: string): string | undefined => {
  const timeRegex = /^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/ // 0000 - 2359
  const mask = "hh:mm"

  if (time.length === mask.length - 1 && !timeRegex.test(time)) {
    return "Invalid time"
  }
}

const isNumber = (value: string): string | undefined => {
  if (!/^\d+$/.test(value)) {
    return "Value is not a number"
  }
}

const options: Record<string, IOption> = {
  date: {
    mask: "DD/MM/YYYY",
    separators: ["/"],
    name: "date",
    // eslint-disable-next-line max-len
    description: "<b><p>simple input</p></b><div>mask: DD/MM/YYYY<br>separators: [\"/\"]</br>",
    withErrors: true,
  },
  code: {
    mask: "****",
    separators: [" "],
    name: "code",
    // eslint-disable-next-line max-len
    description: "<b><p>without separators</p></b><div>mask: ****<br>separators: [\" \"]</br>",
    withErrors: true,
  },
  bankId: {
    mask: "YYYYMMDD-NNNN",
    separators: ["-"],
    name: "bank-id",
    // eslint-disable-next-line max-len
    description: "<b><p>text mask</p></b><div>mask: YYYYMMDD-NNNN<br>separators: [\"-\"]</div>",
    withErrors: true,
  },
  phone: {
    mask: "xxx (xx) xxx xx xx",
    separators: [" ", "(", ")"],
    name: "phone",
    // eslint-disable-next-line max-len
    description: "<b><p>multi separators</p></b><div>mask: xxx (xx) xxx xx xx<br>separators: [\" \", \"(\", \")\"] <br>withErrors: false</div>",
  },
  time: {
    mask: "hh-mm",
    separators: ["-"],
    name: "time",
    // eslint-disable-next-line max-len
    description: "<b><p>custom validators</p></b><div>mask: hh-mm<br>separators: [\"-\"]<br>validators: <br>[<br>&nbsp;isNumber,<br>&nbsp;isValidTime,<br>]</div>",
    validators: [isNumber, isValidTime],
    withErrors: true,
  },
}

function Main () {
  return (
    <div className={styles.main}>
      {Object.values(options).map(({
        mask,
        separators,
        name,
        description,
        validators,
        withErrors,
      }) => (
        <div className={styles.row} key={name}>
          <div
            className={styles.label}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <div className={styles.container}>
            <Input
              mask={mask}
              separators={separators}
              name={name}
              validators={validators}
              withErrors={withErrors}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Main
