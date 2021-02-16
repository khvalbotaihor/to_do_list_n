import React from "react";
import styles from "./Button.module.css"
import cn from "classnames"

type  ButtonType = {
    text: string
    type?: "default" | "danger" | "success" | "info"
    changeFilter: ()=> void
}

const Button = (props: any) =>{
    const css = cn({
        [styles.button]: true,
        [styles.danger] : props.type==="danger",
        [styles.success] : props.type==="success",
        [styles.info]: props.type === "info"
    })


    const changeFilter = () => {
        props.changeFilter(props.text)
    }

    return(
        <input className={css} type="button" value={props.text} onClick={changeFilter}/>
    )
}
export default Button;