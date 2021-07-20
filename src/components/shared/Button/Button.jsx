import React from 'react'
import styles from "./Button.module.css"

const Button = ({text,icon,onClick}) => {
    return (
        <div>
            <button onClick={onClick} className={styles.button}>
            <span>{text}</span>
            <img  clasName={styles.arrow} src={`images/${icon}.png`} alt="" />
            </button>
        </div>
    )
}

export default Button

