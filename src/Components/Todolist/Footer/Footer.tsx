import React from "react";
import Button from "../../common/Button/Button";

export function Footer(props:any) {

    // changeFilter

    return (
        <div className="todoList-footer">
            <Button text="All" type="info" changeFilter={props.changeFilter}/>
            <Button text="Completed" type="danger" changeFilter={props.changeFilter}/>
            <Button text="Active" type="success" changeFilter={props.changeFilter}/>
        </div>
    )
}