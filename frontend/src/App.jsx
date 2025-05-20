import {Route, Routes, BrowserRouter, NavLink} from 'react-router-dom'
import TaskList from './pages/TaskList'
import Addtask from './pages/AddTask'

function App() {

  return (
    <BrowserRouter>

      <nav>
        <NavLink to="/"> Lista Task</NavLink>
        <NavLink to="/add"> Aggiungi Task</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<TaskList/>} />
        <Route path="/add" element={<Addtask/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
