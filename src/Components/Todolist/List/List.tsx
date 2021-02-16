import React from "react";
import styles from "./style.module.css"

export function List() {
    return (
        <div className={styles.list}>
            <Task title="CSS" checked={true} />
            <Task title="JS" checked={false} />
            <Task title="ReactJS" checked={false} />
            <Task title="Patterns" checked={true} />
        </div>
    )
}

type TaskType = {
    title: string
    checked: boolean
}

const Task = (props: TaskType) =>{
    return (
        <div className={styles.task}>
            <input type="checkbox" checked={props.checked}/>
            <span>{props.title}</span>
        </div>
    )
}