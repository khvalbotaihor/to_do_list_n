import {Header} from "../Todolist/Header/Header";
import {List} from "../Todolist/List/List";
import {Footer} from "../Todolist/Footer/Footer";
import React from "react";
import styles from "./style.module.css"
import {FilterValueTypes, TaskType} from "../../App";

type ToDoListType = {
    title: string
    changeFilter : (values: FilterValueTypes) => void
    removeTask : (id:string)=> void
    addTask : (title:string)=> void
    tasks: TaskType[]
    changeTaskStatus: (value:boolean, id:string)=> void
}

export function ToDoList(props:ToDoListType) {
    return (
        <div className={styles.todolist}>
            <Header title={props.title} addTask={props.addTask}/>
            <List tasks={props.tasks} removeTask={props.removeTask} changeTaskStatus={props.changeTaskStatus}/>
            <Footer changeFilter={props.changeFilter}/>
        </div>
    )
}