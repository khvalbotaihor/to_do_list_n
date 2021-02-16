import React, {useState} from "react";
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

    return (
        <div className="todoList-header">
            <h3 className="todoList-header__title">{props.title}</h3>
            <div className="todoList-newTaskForm">
                <Input value={title} onChange={(e:any)=>{setTitle(e.currentTarget.value)}} />
                <button onClick={addTask}>+</button>
            </div>
        </div>
    )
}