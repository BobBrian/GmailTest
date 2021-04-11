import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router , Switch, Route, Link} from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './Login';



function App() {

  const sendMessage = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() =>{

  }, [])

  return (
    <Router>
      {/*This Code Below works in congjunction with our userSlice to determine if a User is Logged in or not and if they are not they are immediatly transported to the  Login Page */}

        {!user ? (
          <Login/>
        ):(
          <div className="App">
          <Header/>
          <div className="app_body">
          <Sidebar/>
            <Switch>
              <Route path="/mail">
                <Mail/>
              </Route>

              <Route path="/">
                <EmailList/>
              </Route>
          </Switch>
          </div>
         {sendMessage && <SendMail/>} 
        </div>
        )} 
    </Router>
    
  );
}

export default App;
