import React from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

export function Header() {
    return (
        <div className="todoList-header">
            <h3 className="todoList-header__title">What to Learn</h3>
            <div className="todoList-newTaskForm">
                <Input placeholder="New title" />
                <Button text="Add"/>
            </div>
        </div>
    )
}