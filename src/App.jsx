import './App.css';
import Form from './components/form';
import Navbar from './components/Navbar';
import sidebar from './components/sidebar'
import { BrowserRouter as Router,
Switch,
Route,
Redirect
} from 'react-router-dom';


function App() {
  return[
    <div>
     <Router>
      <Switch>
        <Route exact path='/' Component={Form} />
        <Redirect to='/' />
      </Switch>
        <Form />
        <Navbar />
     </Router>
      </div>
  ]
}

export default App 