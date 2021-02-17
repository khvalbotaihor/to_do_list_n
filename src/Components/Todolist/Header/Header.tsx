import React, {ChangeEvent, KeyboardEvent,useState} from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

type headerType = {
    title: string
    addTask: (title:string) => void
}

export function Header(props: headerType) {

    let [title, setTitle] = useState("")

    function addTask (){
        props.addTask(title)
        setTitle("")
    }

    function onInputChange(e:ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }

    function onKeyPressChange(e:KeyboardEvent<HTMLInputElement>) {
        if(e.charCode===13){addTask()}
    }

    return (
        <div className="todoList-header">
            <h3 className="todoList-header__title">{props.title}</h3>
            <div className="todoList-newTaskForm">
                <Input value={title}
                       onKeyPress={onKeyPressChange}
                       onChange={onInputChange} />
                <button onClick={addTask}>+</button>
            </div>
        </div>
    )
}