import React, {useState} from "react";
import TaskForm from "./TaskForm";

import './NewTask.css';

const NewTask = (props) => {
    const [formState, setFormState] = useState(false);

    const onSaveTaskHandler =(enteredTaskData) => {
        const taskData ={
            ...enteredTaskData,
            id: Math.random().toString(),
        };
        props.onAddTask(taskData);
    };

    const newFormHandler = () => {
        setFormState((prevstate) => {
            return !prevstate;
        });
    };

    return <div className="new-task">{formState ? <TaskForm onCancel={newFormHandler} onSaveTaskData={onSaveTaskHandler}/> : <button onClick={newFormHandler}>Add New Task</button>}</div>;
};

export default NewTask;