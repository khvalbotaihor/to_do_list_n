import React from "react";

type  InputType = {
    placeholder: string
    onChange: (e: any)=> void
}
const Input = (props:InputType) =>{
    return(
        <input type="text" placeholder={props.placeholder} onChange={props.onChange}/>
    )
}
export default Input