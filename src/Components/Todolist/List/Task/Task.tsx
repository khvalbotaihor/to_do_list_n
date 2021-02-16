import styles from "./Task.module.css";
import React from "react";

type TaskType = {
    title: string
    isDone: boolean
}
export const Task = (props: TaskType) => {
    const css = props.isDone ? styles.done : ""
    return (
        <div className={`${css} ${styles.task}`}>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
        </div>
    )
}