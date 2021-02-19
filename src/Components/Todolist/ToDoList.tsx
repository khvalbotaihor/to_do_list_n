import {Header} from "../Todolist/Header/Header";
import {List} from "../Todolist/List/List";
import {Footer} from "../Todolist/Footer/Footer";
import React from "react";
import styles from "./style.module.css"
import {FilterValueTypes, TaskType} from "../../App";

type ToDoListType = {
    id: string
    title: string
    changeFilter : (values: FilterValueTypes, id: string) => void
    removeTask : (id:string, todoListId:string)=> void
    addTask : (title:string, todoListId:string)=> void
    tasks: TaskType[]
    changeTaskStatus: (value:boolean, id:string, todoListId:string)=> void
    filter:string
}

export function ToDoList(props:ToDoListType) {

    debugger

    return (
        <div className={styles.todolist}>
            <Header title={props.title} addTask={props.addTask} id={props.id}/>
            <List tasks={props.tasks} removeTask={props.removeTask} changeTaskStatus={props.changeTaskStatus}/>
            <Footer changeFilter={props.changeFilter} filter={props.filter} id={props.id}/>
        </div>
    )
}