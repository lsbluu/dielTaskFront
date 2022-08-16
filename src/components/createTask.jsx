import { useContext } from "react";
import fetchPost from "../api/postApi";
import fetchUpdate from "../api/updateApi";



import TaskContext from "../context/taskContext";


function CreateTask () {
  const {Form, setForm, EditBtn} = useContext(TaskContext);
  const handleValues = (event) => {
    const {value, name} = event.target;
    setForm({...Form,
    [name]: value})
  }

  const submitForm = async (e, forms) => {
    e.preventDefault();
      console.log(forms)
    await fetchPost(forms);
    window.location.reload(); 
  };

  const updateForm = async (e) => {
    e.preventDefault()
    
    const { id, title, description, whenDate, duration } = Form;
    
    await fetchUpdate(id,{
      title, description, whenDate, duration
    })
    window.location.reload(); 

  }

return(
  <div className="formDiv">
  <form className="forms">
    <label>
      Titulo:
      <input type="text" 
      value={Form.title} 
      onChange={(e) => handleValues(e)}
      required 
      placeholder="Digite o titulo" 
      name="title"></input>
    </label>
    <label>
      Descrição:
      <input type="text" 
      value={Form.description}
      onChange={(e) => handleValues(e)}
      required placeholder="Digite a descrição" name="description"></input>
    </label>
    <label>
      Quando:
      <input type="datetime-local" 
      value={Form.whenDate}
      onChange={(e) => handleValues(e)}
      required name="whenDate"></input>
    </label>
    <label>
      Duração:
      <input type="number" 
      value={Form.duration}
      onChange={(e) => handleValues(e)}
      required placeholder="Duração em horas" name="duration"></input>
    </label> 
    {
    EditBtn? 
    <input type="submit" onClick={(e) => updateForm(e)} value="Alterar"></input> :
    <input type="submit" onClick={(e) => submitForm(e, Form)} value="Criar"></input>  
    }       
  </form>
  </div>
)
}

export default CreateTask;