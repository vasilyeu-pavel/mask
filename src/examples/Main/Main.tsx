import React from "react"
import Input, { IProps as IInputProps } from "../Input/Input"

import styles from "./Main.module.scss"

interface IOption extends Partial<Pick<IInputProps, "validators">>{
  mask: string;
  separators: string[];
  name: string;
  description: string;
}

function timeValidator (time: string) {
  const timeRegex = /^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/ // 0000 - 2359
  const mask = "hh:mm"

  if (time.length === mask.length - 1 && !timeRegex.test(time)) {
    return "Invalid time"
  }
}

const options: Record<string, IOption> = {
  date: {
    mask: "DD/MM/YYYY",
    separators: ["/"],
    name: "date",
    // eslint-disable-next-line max-len
    description: "<p>just a simple input like date</p><div><strong>mask:</strong> DD/MM/YYYY<br><strong>separators:</strong> [\"/\"]</br>",
  },
  code: {
    mask: "****",
    separators: [" "],
    name: "code",
    // eslint-disable-next-line max-len
    description: "<p>without separators like code input</p><div><strong>mask:</strong> ****<br><strong>separators:</strong> [\" \"]</br>",
  },
  bankId: {
    mask: "YYYYMMDD-NNNN",
    separators: ["-"],
    name: "bank-id",
    // eslint-disable-next-line max-len
    description: "<p>mask like a text describing input</p><div><strong>mask:</strong> YYYYMMDD-NNNN<br><strong>separators:</strong> [\"-\"]</div>",
  },
  phone: {
    mask: "+xxx (xx) xxx xx xx",
    separators: ["+", " ", "(", ")"],
    name: "phone",
    // eslint-disable-next-line max-len
    description: "<p>with multi separators, like phone input</p><div><strong>mask:</strong> +xxx (xx) xxx xx xx<br><strong>separators:</strong> [\"+\", \" \", \"(\", \")\"]</div>",
  },
  time: {
    mask: "hh-mm",
    separators: ["-"],
    name: "time",
    // eslint-disable-next-line max-len
    description: "<p>with custom validators</p><div><strong>mask:</strong>hh-mm<br><strong>separators:</strong> [\"-\"]<br><strong>validators:</strong> [timeValidator]</div>",
    validators: [timeValidator],
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
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Main
