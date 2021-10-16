import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import Home from './Conponents/Home/Home';
import SignUp from './Conponents/SignUp/SignUp';
import Login from './Conponents/Login/Login';
import Search from './Conponents/Search/Search';
import SearchResult from './Conponents/SearchResult/SearchResult';
import Topbar from './Conponents/Topbar/Topbar';
import { createContext, useState } from 'react';
import PrivateRoute from './Conponents/PrivateRoute/PrivateRoute';
export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    name:'',
    email: '',
  });
  const [vehicle, setVehicle] = useState({
    img:'',
    rent:''
  });
  const [value, setValue] = useState({
    prickFrom:'',
    pickTo:''
  });
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Topbar />
        <Switch>
          <Route path="/" exact>
            <Home vehicle={vehicle} setVehicle={setVehicle}/>
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/search">
            <Search setValue={setValue} value={value}/>
          </PrivateRoute>
          <Route path="/searchResult">
            <SearchResult value={value} vehicle={vehicle} />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
