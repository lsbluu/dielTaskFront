import { useEffect, useState } from "react"
import fetchApi from "../api/fetchApi";
import TaskContext from "./taskContext";


function TaskProvider ({ children }) {
  const [Task, setTask] = useState([]);
  const [FilterTitle, setFilterTitle] = useState('');
  const [EditBtn, setEditBtn ] = useState(false);
  const [Loading, setLoading] = useState(true)
  const [Form, setForm] = useState({
    title: '',
    description: '',
    whenDate: '',
    duration: ''
  })


  const getTask = async () => {
const taskResponse = await fetchApi();
setTask(taskResponse);
setLoading(false)
  }

  useEffect(() => {
    getTask()
  },[])

  const context = {
    Task,
    setTask,
    Form, 
    setForm,
    EditBtn, setEditBtn,
    FilterTitle, setFilterTitle,Loading, setLoading
  }


  return (
    <TaskContext.Provider value={ context }>
      { children }
    </TaskContext.Provider>
  )
}

export default TaskProvider;