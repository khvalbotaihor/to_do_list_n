import React from "react";
import styles from "./style.module.css"
import {Task} from "./Task/Task";

export function List() {
    return (
        <div className={styles.list}>
            <Task title="CSS" isDone={true} />
            <Task title="JS" isDone={false} />
            <Task title="ReactJS" isDone={false} />
            <Task title="Patterns" isDone={true} />
        </div>
    )
}

