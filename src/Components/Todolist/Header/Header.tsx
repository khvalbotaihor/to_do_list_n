import React from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

type headerType = {
    title: string
    addTask: () => void
}

export function Header(props: headerType) {

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