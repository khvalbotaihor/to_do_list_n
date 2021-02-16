import styles from "./Task.module.css";
import React from "react";
import cn from "classnames"


type TaskType = {
    title: string
    isDone: boolean
    removeTask: ()=> void
    id: number
}
export const Task = (props: any) => {
    const css1 = cn({
        [styles.task]: true,
        [styles.done]: props.isDone
    })

    const removeTask = () => {
        props.removeTask(props.id)
    }

    //const css = props.isDone ? styles.done : ""


    return (
        <div className={css1}>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
            <button onClick={removeTask}>x</button>
        </div>
    )
}