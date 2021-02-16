import styles from "../style.module.css";
import React from "react";

type TaskType = {
    title: string
    isDone: boolean
}
export const Task = (props: TaskType) => {
    return (
        <div className={styles.task}>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
        </div>
    )
}