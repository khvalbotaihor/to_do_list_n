import React from "react";
import styles from "./style.module.css"

type  ButtonType = {
    text: string
}

const Button = (props: ButtonType) =>{
    return(
        <input className={styles.button} type="button" value={props.text}/>
    )
}
export default Button;