import React from "react";
import styles from "./Button.module.css"

type  ButtonType = {
    text: string
    type?: "default" | "danger" | "success" | "info"
}

const Button = (props: ButtonType) =>{
    let css = styles.button

    if(props.type === "danger"){
        css = styles.danger
    }
    if(props.type === "info"){
        css = styles.info
    }
    if(props.type === "success"){
        css = styles.success
    }

    if(props.type === "default" || !props.type ){
        css = ""
    }

    return(
        <input className={`${styles.button} ${css}`} type="button" value={props.text}/>
    )
}
export default Button;