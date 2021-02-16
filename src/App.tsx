import React from 'react';
import styles from './App.module.css';
import {ToDoList} from "../src/Components/Todolist/ToDoList";
import {v1} from "uuid";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {

    const tasks : TaskType[]= [
        {id: v1(), title:"CSS", isDone:true},
        {id: v1(), title:"JS", isDone:true},
        {id: v1(), title:"React", isDone:false},
    ]

    return (
        <div className={styles.App}>
            <ToDoList />
            <ToDoList />
        </div>
    );
}

export default App;
