import styles from "./Task.module.css";
import React, {ChangeEvent} from "react";
import cn from "classnames"


type TaskType = {
    title: string
    isDone: boolean
    removeTask: (todoListId:string)=> void
    id: number
    changeTaskStatus: (value:boolean, id:string) => void
}
export const Task = (props: any) => {
    const css1 = cn({
        [styles.task]: true,
        [styles.done]: props.isDone
    })

    const removeTask = () => {
        props.removeTask(props.id)
    }

    const changeCheckboxValue = (e:ChangeEvent<HTMLInputElement>) =>{
        const value = e.currentTarget.checked
        props.changeTaskStatus(value, props.id)

    }
    //const css = props.isDone ? styles.done : ""


    return (
        <div className={css1}>
            <input type="checkbox" checked={props.isDone} onChange={changeCheckboxValue}/>
            <span>{props.title}</span>
            <button onClick={removeTask}>x</button>
        </div>
    )
}