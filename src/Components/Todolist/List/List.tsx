import React from "react";
import styles from "./style.module.css"
import {Task} from "./Task/Task";
import {TaskType} from "../../../App";

// tasks={props.tasks}

export function List(props:any) {

    const tasksArray = props.tasks.map((task: TaskType) =>{
        return <Task title={task.title}
                     isDone={task.isDone}
                     key={task.id}
                     removeTask={props.removeTask}
                     changeTaskStatus={props.changeTaskStatus}
                     id={task.id}
        />

    } )

    return (
        <div className={styles.list}>
{/*            <Task title={props.tasks[0].title} isDone={props.tasks[0].isDone} />
            <Task title={props.tasks[1].title} isDone={props.tasks[1].isDone} />
            <Task title={props.tasks[2].title} isDone={props.tasks[2].isDone} />*/}

            {tasksArray}
        </div>
    )
}

