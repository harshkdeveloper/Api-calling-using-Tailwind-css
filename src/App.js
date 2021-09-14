import logo from './logo.svg';
// import './App.css';
import List from './components/List';
import { Home } from './components/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Productcard from './components/Productcard';
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/List/:id' component={List}/>
   <Route path='/' component={Home}/>
    </Switch>
    <div>
       {/* <List/> */}
      
      {/* <Home/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
