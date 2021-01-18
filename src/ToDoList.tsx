import {Header} from "./Header";
import {List} from "./List";
import {Footer} from "./Footer";
import React from "react";

export function ToDoList() {
    return (
        <div className="todoList">
            <Header/>
            <List/>
            <Footer/>
        </div>
    )
}