import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/Routes';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  
  return (
    <>
    <Router>
      <Navbar/>
      <AppRoutes/>
    </Router>
    </>
  )
}

export default App
