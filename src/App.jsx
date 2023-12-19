import './App.css';
import Form from './components/form';
import Navbar from './components/Navbar';
import { BrowserRouter,
Route,
Routes,
} from 'react-router-dom';


function App() {
  return[

   
    <BrowserRouter>
    <Routes>
                <Route path="/" element={<Form/>} />
                </Routes>
</BrowserRouter>
  ]
}

export default App 