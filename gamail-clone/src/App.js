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
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';



function App() {

  const sendMessage = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() =>{
    auth.onAuthStateChanged(user =>{
      if (user){
        // if the user is Logged in
        dispatch(login({
          displayName: user.displayName,
          email:user.email,
          photoUrl:user.photoUrl,

        }))
      }
    })

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
