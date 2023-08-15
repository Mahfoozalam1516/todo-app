import React, {useState} from "react";
import './TaskForm.css';


const TaskForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredStatus, setEnteredStatus] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        console.log('Event');
        setEnteredTitle(e.target.value);
    };

    const statusChangeHandler = (e) => {
        setEnteredStatus(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const taskData ={
            title: enteredTitle,
            status: enteredStatus,
            date: new Date(enteredDate),
        };
        console.log(taskData);
        props.onSaveTaskData(taskData);
        setEnteredTitle('');
        setEnteredStatus('');
        setEnteredDate('');
    };

    const cancelHandler = () => {
        props.onCancel();
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-task__controls">
                <div className="new-task__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-task__control">
                    <label>Status</label>
                    <input type="text"  value={enteredStatus} onChange={statusChangeHandler}/>
                </div>
                <div className="new-task__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-13" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className= "new-task__actions">
                <button type= "button" onClick={cancelHandler}>Cancel</button>
                <button type= "submit">Add Task</button>
            </div>
        </form>
    );
};

export default TaskForm;