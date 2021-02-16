import React from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

export function Header(props: any) {

    const addTask = () =>{
        props.addTask()
    }

    return (
        <div className="todoList-header">
            <h3 className="todoList-header__title">{props.title}</h3>
            <div className="todoList-newTaskForm">
                <Input placeholder="New title" />
                <button onClick={addTask}>+</button>
            </div>
        </div>
    )
}