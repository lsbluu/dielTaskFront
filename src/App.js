import TaskProvider from './context/taskProvider';
import Tasks from './pages/tasks';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateTask from './components/createTask';
import Search from './components/search';

function App() {
  return (
    <main className='mainAll'>
    <TaskProvider>
      <BrowserRouter>
      <Search />
      <CreateTask />
      
      <Routes>
      <Route path='/' element={<Tasks />}></Route>      
      </Routes>
      </BrowserRouter>
    </TaskProvider>
    </main>
  );
}

export default App;
