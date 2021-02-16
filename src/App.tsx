import React from 'react';
import styles from './App.module.css';
import {ToDoList} from "../src/Components/Todolist/ToDoList";

function App() {
    return (
        <div className={styles.App}>
            <ToDoList />
            <ToDoList />
        </div>
    );
}

export default App;
