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

    let todoListId1 = v1()
    let todoListId2 = v1()

    let [todoLists, setTodoLists] = useState([
        {id: todoListId1,title: "What to learn", filter: "All"},
        {id: todoListId2,title: "What to buy", filter: "All"}
    ])

    let [tasks, setTasks] = useState({
        todoListId1 : [
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true}
        ],
        todoListId2 : [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React", isDone: true}
        ],
    })

/*    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ])*/

    const removeTask = (id: string) => {
        let filteredList = tasks.filter(task => task.id !== id)
        setTasks(filteredList)
    }

    const addTask = (title: string) => {
        let task = {id: v1(), title: title, isDone: false}
        let newTask = [task, ...tasks]
        setTasks(newTask)
    }


    const changeTaskStatus = (value: boolean, id: string) => {
        const task = tasks.find(el => el.id === id)
        if (task) {
            task.isDone = value
            setTasks([...tasks])
        }
    }


    const changeFilter = (value: FilterValueTypes, id: string) => {
        let todoList = todoLists.find(tl => tl.id === id)
        if(todoList){
            let updatedTodoList = todoList.filter= value
            setTodoLists([...todoLists])
        }

    }

    return (
        <div className={styles.App}>
            {todoLists.map(tl => {

                let tasksForToDoList = tasks

                if (tl.filter === "Active") {
                    tasksForToDoList = tasks.filter(e => e.isDone === false)
                }
                if (tl.filter === "Completed") {
                    tasksForToDoList = tasks.filter(e => e.isDone === true)
                }


                return <ToDoList
                    id={tl.id}
                    key={tl.id}
                    tasks={tasksForToDoList}
                    title={tl.title}
                    addTask={addTask}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    changeTaskStatus={changeTaskStatus}
                    filter={tl.filter}
                />
            })}


        </div>
    );
}

export default App;
