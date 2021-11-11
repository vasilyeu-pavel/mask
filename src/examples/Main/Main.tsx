import React from "react"
import Input from "../Input"

import styles from "./Main.module.scss"

const options = {
  date: {
    mask: "DD/MM/YYYY",
    separators: ["/"],
    name: "date",
    description: "just one separator",
  },
  code: {
    mask: "****",
    separators: [" "],
    name: "code",
    description: "without separators",
  },
  bankId: {
    mask: "YYYYMMDD-NNNN",
    separators: ["-"],
    name: "bank-id",
    description: "with text mask",
  },
  phone: {
    mask: "+xxx (xx) xxx xx xx",
    separators: ["+", " ", "(", ")"],
    name: "phone",
    description: "with multi separators",
  },
  card: {
    mask: "**** **** **** ****",
    separators: [" "],
    name: "card",
    description: "card",
  },
}

function Main () {
  return (
    <div className={styles.main}>
      {Object.values(options).map(({ mask, separators, name, description }) => (
        <div className={styles.row} key={name}>
          <div className={styles.label}>{description}</div>
          <div className={styles.container}>
            <Input
              mask={mask}
              separators={separators}
              name={name}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Main
