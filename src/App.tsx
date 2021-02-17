import React, {useState} from 'react';
import styles from './App.module.css';
import {ToDoList} from "../src/Components/Todolist/ToDoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValueTypes = "All" | "Active" | "Completed"

function App() {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ])

    const removeTask = (id: string) =>{
        let filteredList = tasks.filter(task => task.id !== id)
        setTasks(filteredList)
    }

    const addTask = (title: string) => {
        let task = {id: v1(), title: title, isDone: false}
        let newTask = [task, ...tasks]
        setTasks(newTask)
    }


    const changeTaskStatus = (taskId: string) =>{

    }

    let [filter, setFilter] = useState<FilterValueTypes>("All")

    let tasksForToDoList = tasks

    if(filter==="Active"){
        tasksForToDoList = tasks.filter(e => e.isDone === false)
    }
    if(filter==="Completed"){
        tasksForToDoList = tasks.filter(e => e.isDone === true)
    }

    const changeFilter = (value: FilterValueTypes) =>{
        setFilter(value)
    }

    return (
        <div className={styles.App}>
            <ToDoList
                tasks={tasksForToDoList}
                title={"What to learn"}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
