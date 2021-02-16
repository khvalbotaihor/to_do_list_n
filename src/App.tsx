import React from 'react';
import styles from './App.module.css';
import {ToDoList} from "../src/Components/Todolist/ToDoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {

    const tasks1 : TaskType[]= [
        {id: v1(), title:"CSS", isDone:true},
        {id: v1(), title:"JS", isDone:true},
        {id: v1(), title:"React", isDone:false},
    ]
    const tasks2 : TaskType[]= [
        {id: v1(), title:"Bicycle", isDone:false},
        {id: v1(), title:"Bread", isDone:true},
        {id: v1(), title:"Milk", isDone:false},
    ]
    const tasks3 : TaskType[]= [
        {id: v1(), title:"Anger", isDone:true},
        {id: v1(), title:"Happiness", isDone:false},
        {id: v1(), title:"Dispatch", isDone:true},
    ]

    return (
        <div className={styles.App}>
            <ToDoList tasks={tasks1} title={"What to learn"}/>
            <ToDoList tasks={tasks2} title={"What to buy"}/>
            <ToDoList tasks={tasks3} title={"What to forget"}/>
        </div>
    );
}

export default App;
