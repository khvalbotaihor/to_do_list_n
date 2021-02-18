import React from "react";

type  InputType = {
    value: string
    onChange: (e: any)=> void
    onKeyPress: (e:any)=> void
    style: string
}
const Input = (props:InputType) =>{
    return(
        <input
            className={props.style}
            type="text" value={props.value} onChange={props.onChange} onKeyPress={props.onKeyPress}/>
    )
}
export default Input