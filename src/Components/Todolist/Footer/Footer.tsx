import React from "react";
import Button from "../../common/Button/Button";

export function Footer(props:any) {



    return (
        <div className="todoList-footer">
            <Button text="All" type="info" changeFilter={props.changeFilter} filter={props.filter}/>
            <Button text="Completed" type="danger" changeFilter={props.changeFilter} filter={props.filter}/>
            <Button text="Active" type="success" changeFilter={props.changeFilter} filter={props.filter}/>
        </div>
    )
}