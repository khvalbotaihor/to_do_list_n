import {Header} from "../Todolist/Header/Header";
import {List} from "../Todolist/List/List";
import {Footer} from "../Todolist/Footer/Footer";
import React from "react";
import styles from "./style.module.css"

export function ToDoList(props:any) {
    return (
        <div className={styles.todolist}>
            <Header title={props.title} addTask={props.addTask}/>
            <List tasks={props.tasks} removeTask={props.removeTask}/>
            <Footer changeFilter={props.changeFilter}/>
        </div>
    )
}