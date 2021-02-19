import React, {useState} from 'react';
import styles from './App.module.css';
import {ToDoList} from "../src/Components/Todolist/ToDoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type ToDoListType = {
    id: string
    title: string
    filter: FilterValueTypes
}

export type taskObj = {
    [keys: string] : Array<TaskType>
}

export type FilterValueTypes = "All" | "Active" | "Completed"

function App() {

    let todoListId1 = v1()
    let todoListId2 = v1()

    let [todoLists, setTodoLists] = useState<ToDoListType[]>([
        {id: todoListId1,title: "What to learn", filter: "All"},
        {id: todoListId2,title: "What to buy", filter: "All"}
    ])

    let [tasksObj, setTasks] = useState<taskObj>({
        [todoListId1] : [
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true}
        ],
        [todoListId2] : [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React", isDone: true}
        ],
    })

    const removeTask = (id: string, todoListId: string) => {
        let tasks = tasksObj[todoListId]
        let filteredList = tasks.filter(task => task.id !== id)
        tasksObj[todoListId] = filteredList
        setTasks({...tasksObj})
    }

    const addTask = (title: string, todoListId: string) => {
        let task = {id: v1(), title: title, isDone: false}
        let tasks = tasksObj[todoListId]

        let newTask = [task, ...tasks]
        tasksObj[todoListId] = newTask
        setTasks({...tasksObj})
    }


    const changeTaskStatus = (value: boolean, id: string, todoListId:string) => {
        let tasks = tasksObj[todoListId]

        const task = tasks.find(el => el.id === id)
        if (task) {
            task.isDone = value
            setTasks({...tasksObj})
        }
    }


    const changeFilter = (value: FilterValueTypes, id: string) => {
        let todoList = todoLists.find(tl => tl.id === id)
        if(todoList){
            let updatedTodoList = todoList.filter= value
            setTodoLists([...todoLists])
        }

    }

    const deleteTaskFromList = (todoListId:string) => {
        let filteredList = todoLists.filter(todoList => todoList.id !== todoListId)

        setTodoLists(filteredList)

        delete tasksObj[todoListId]
        setTasks({...tasksObj})

    }

    return (

        <div className={styles.App}>
            {todoLists.map(tl => {

                let a = tasksObj;

                let tasksForToDoList = tasksObj[tl.id]

                let c = tasksForToDoList

                if (tl.filter === "Active") {
                    tasksForToDoList = tasksForToDoList.filter(e => e.isDone === false)
                }
                if (tl.filter === "Completed") {
                    tasksForToDoList = tasksForToDoList.filter(e => e.isDone === true)
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
                    deleteTaskFromList={deleteTaskFromList}
                />
            })}


        </div>
    );
}

export default App;
