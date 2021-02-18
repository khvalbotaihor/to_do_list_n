import React from "react";
import styles from "./Button.module.css"
import {FilterValueTypes} from "../../../App";

type  ButtonType = {
    text: string
    type?: "default" | "danger" | "success" | "info"
    changeFilter: (text: string, id:string)=> void
    filter:FilterValueTypes
    id: string
}

const Button = (props: ButtonType) =>{
    let css = styles.button
    if (props.filter === props.text){
        css = `${css} ${styles.activeFilter}`
    }


    const changeFilter = () => {
        props.changeFilter(props.text, props.id)
    }

    return(
        <input className={css} type="button" value={props.text} onClick={changeFilter}/>
    )
}
export default Button;