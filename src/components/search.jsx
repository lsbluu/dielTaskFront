import { useContext } from "react";
import TaskContext from "../context/taskContext";

function Search(){
  const {FilterTitle, setFilterTitle} = useContext(TaskContext);
  const handleFilter = (e) =>{
    setFilterTitle(e.target.value);
    console.log(e.target.value)
  }
  return(
    <div className="search">
    <label className="lb-search">
      Pesquisar:
    <input type="text" value={FilterTitle} onChange={(e) => handleFilter(e)} placeholder="Pesquise"></input>
    </label>
    </div>
  )
}

export default Search;