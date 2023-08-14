import React from "react";

const Tasks = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => {
                return (
                    <div>
                        <h1>{task.title}</h1>
                        <p>{task.status}</p>
                        </div>
                );
            })}
       </div>
       );
};

export default Tasks;