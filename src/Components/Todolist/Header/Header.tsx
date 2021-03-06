import React, {ChangeEvent, KeyboardEvent,useState} from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import styles from "./Header.module.css"

type headerType = {
    id: string
    title: string
    addTask: (title: string, id: string) => void
    deleteTaskFromList: (todoListId: string) => void
}

export function Header(props: headerType) {
    let css = styles.header

    let [error, setError] = useState<null | string>(null)
    let [title, setTitle] = useState("")

    function addTask (){
        title = title.trim()
        if(title !==""){
            props.addTask(title, props.id)
            setTitle("")
        }else {
            if(title === ""){
                setError("Please add a value")
            }
        }

    }

    function onInputChange(e:ChangeEvent<HTMLInputElement>) {
        setError("")
        setTitle(e.currentTarget.value)
    }

    function onKeyPressChange(e:KeyboardEvent<HTMLInputElement>) {
        if(e.charCode===13){addTask()}
    }

    function deleteTask () {
            props.deleteTaskFromList(props.id)
    }

    return (
        <div className="todoList-header">
            <h3 className="todoList-header__title">{props.title}
            <button onClick={deleteTask}>x</button>
            </h3>
            <div className="todoList-newTaskForm">
                <Input value={title}
                       onKeyPress={onKeyPressChange}
                       onChange={onInputChange}
                       style={error ? styles.error : ""}
                />
                <button onClick={addTask}>+</button>
                {error && <div className={styles.errorMessage}>{error}</div>}
            </div>
        </div>
    )
}