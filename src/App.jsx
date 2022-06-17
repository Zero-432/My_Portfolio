import './styles/main.scss'
import { Router } from 'react-router-dom'
import RoutesPages from './routes/RoutesPages'

const App = () => {
  return (
    <Router>
      <RoutesPages />
    </Router>
  )
}

export default App
