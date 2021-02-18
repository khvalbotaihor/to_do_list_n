import React, {ChangeEvent, KeyboardEvent,useState} from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import styles from "./Header.module.css"

type headerType = {
    title: string
    addTask: (title:string) => void
}

export function Header(props: headerType) {
    let css = styles.header

    let [error, setError] = useState<null | string>(null)
    let [title, setTitle] = useState("")

    function addTask (){
        title = title.trim()
        if(title !==""){
            props.addTask(title)
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

    return (
        <div className="todoList-header">
            <h3 className="todoList-header__title">{props.title}</h3>
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