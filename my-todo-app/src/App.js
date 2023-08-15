import React, {useState} from "react";
import Tasks from "./components/Tasks/Tasks";

const DUMMY_TASK= [
 {
  id: 'e1',
  title: 'Complete React Course',
  status: 'progress',
  date: new Date(2020, 7, 14),
 } ,
 {
  id: 'e2',
  title: 'Complete React Projects',
  status: 'statrted',
  date: new Date(2021, 2, 18),
 } ,
 {
  id: 'e3',
  title: 'Upload the project to github',
  status: 'Not-started',
  date: new Date(2021, 2, 12),
 } ,
 {
  id: 'e4',
  title: 'Complete the book',
  status: 'completed',
  date: new Date(2021, 5, 12),
 } ,
];

function App(){
const [task, setTask] = useState(DUMMY_TASK);


  return (
    <div className="App">
      <Tasks tasks={task}/>
    </div>
  );
}

export default App;
