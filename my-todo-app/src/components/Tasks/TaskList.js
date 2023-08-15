import React from "react";
import TaskItem from "./TaskItem";
import './TaskList.css';

const TaskList = (props) => {
    if(props.items.length === 0){
        return <h2 className="task-list__fallback">No tasks found.</h2>
    }
    return (
        <ul className= "task-list">
        {props.items.map((task)=> {
        return <TaskItem key={task.id} title={task.title} status={task.status} date={task.date} />;
            })}
            </ul>
    );
};

export default TaskList;