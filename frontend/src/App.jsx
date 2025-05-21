import {Route, Routes, BrowserRouter, NavLink} from 'react-router-dom'
import TaskList from './pages/TaskList'
import Addtask from './pages/AddTask'
import { GlobalProvider } from './context/GlobalContext'

function App() {

  return (
    <GlobalProvider>
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
    </GlobalProvider>
  )
}

export default App
