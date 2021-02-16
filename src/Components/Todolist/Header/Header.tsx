import React, {useState} from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

type headerType = {
    title: string
    addTask: (title:string) => void
}

export function Header(props: headerType) {

    const [title, setTitle] = useState("")

    const addTask = () =>{
        props.addTask(title)
    }

    return (
        <div className="todoList-header">
            <h3 className="todoList-header__title">{props.title}</h3>
            <div className="todoList-newTaskForm">
                <Input placeholder={title} onChange={(e:any)=>{setTitle(e.currentTarget.value)}} />
                <button onClick={addTask}>+</button>
            </div>
        </div>
    )
}