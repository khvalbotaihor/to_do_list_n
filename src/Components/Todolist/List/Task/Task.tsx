import styles from "./Task.module.css";
import React from "react";
import cn from "classnames"


type TaskType = {
    title: string
    isDone: boolean
}
export const Task = (props: TaskType) => {
    const css1 = cn({
        [styles.task]: true,
        [styles.done]: props.isDone
    })


    //const css = props.isDone ? styles.done : ""


    return (
        <div className={css1}>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
        </div>
    )
}