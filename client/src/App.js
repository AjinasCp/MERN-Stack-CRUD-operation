
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './components/User';
import Create from './components/Create';
import Update from './components/Update';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<User/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
