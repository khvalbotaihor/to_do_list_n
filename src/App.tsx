import React, {useState} from 'react';
import styles from './App.module.css';
import {ToDoList} from "../src/Components/Todolist/ToDoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueTypes = "all" | "active" | "completed"

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ])

    const removeTask = (id: number) =>{
        let filteredList = tasks.filter(task => task.id !== id)
        setTasks(filteredList)
    }

    const addTask = () => {
        let task = {id: 56, title: "New Task", isDone: false}
        let newTask = [task, ...tasks]
        setTasks(newTask)
    }

    let [filter, setFilter] = useState("All")

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
