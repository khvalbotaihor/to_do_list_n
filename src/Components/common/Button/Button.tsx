import React from "react";
import s from "./style.module.css"

const Button = (props: any) =>{
    return(
        <input className={s.button} type="button" value={props.text}/>
    )
}
export default Button;