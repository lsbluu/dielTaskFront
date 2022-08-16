import { useContext } from "react";
import fetchDelete from "../api/deleteApi";
import TaskContext from "../context/taskContext";

function Tasks () {
  const { Task, setForm, setEditBtn, FilterTitle, Loading } = useContext(TaskContext);
  const handleDelete = async (id) =>{
    await fetchDelete(id)
    window.location.reload();
  }

  const handleUpdate = async (task, e) =>{
    setEditBtn(true);
    const {id, title, description, whenDate, duration} = task;  
    const date = new Date(whenDate);
    const when = date.toISOString().replace(/.000Z/, "");
    console.log(when)
    const formUpdated = {
      id, title, description, whenDate: when, duration
    }   

    setForm(formUpdated)
  }


  return(
    <div className="tasks">
       <table border="1">
        <tbody>
          <tr>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Data marcada</th>
            <th>Duração em Horas</th>
            <th>Opções</th>
          </tr>
    {Loading? 'Loading...' : Task
    .filter((task) => 
    task.title.includes(FilterTitle) || task.description.includes(FilterTitle) ||
    task.duration.includes(FilterTitle) || task.whenDate.includes(FilterTitle)
    )
    .map((task) => (      
       <tr key={task.id}>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.whenDate}</td>
        <td>{task.duration}</td>
        <td>
          <button onClick={(e) => handleUpdate(task, e)}>Editar</button>
          <button onClick={() => handleDelete(task.id)}>Excluir</button></td>
       </tr>
    ))}
     </tbody>
      </table>
    </div>
  )
}

export default Tasks;

