import {Header} from "../Todolist/Header/Header";
import {List} from "../Todolist/List/List";
import {Footer} from "../Todolist/Footer/Footer";
import React from "react";
import styles from "./style.module.css"

export function ToDoList() {
    return (
        <div className={styles.todolist}>
            <Header/>
            <List/>
            <Footer/>
        </div>
    )
}