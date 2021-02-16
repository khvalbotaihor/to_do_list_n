import React from "react";

type  InputType = {
    value: string
    onChange: (e: any)=> void
}
const Input = (props:InputType) =>{
    return(
        <input type="text" value={props.value} onChange={props.onChange}/>
    )
}
export default Input