import React from "react";
import Button from "../../common/Button/Button";

export function Footer(props:any) {



    return (
        <div className="todoList-footer">
            <Button text="All" type="info" changeFilter={props.changeFilter} filter={props.filter} id={props.id}/>
            <Button text="Completed" type="danger" changeFilter={props.changeFilter} filter={props.filter} id={props.id}/>
            <Button text="Active" type="success" changeFilter={props.changeFilter} filter={props.filter} id={props.id}/>
        </div>
    )
}