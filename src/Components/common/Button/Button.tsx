import React from "react";
import styles from "./Button.module.css"
import cn from "classnames"

type  ButtonType = {
    text: string
    type?: "default" | "danger" | "success" | "info"
}

const Button = (props: ButtonType) =>{

    const css = cn({
        [styles.button]: true,
        [styles.danger] : props.type==="danger",
        [styles.success] : props.type==="success",
        [styles.info]: props.type === "info"
    })

/*    let css = styles.button

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
    }*/

    return(
        <input className={css} type="button" value={props.text}/>
    )
}
export default Button;