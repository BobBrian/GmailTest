import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router , Switch, Route, Link} from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {

  //The Useselector will allow us to fetch that data form the redux stor( which is located in the dataLayer )
  const sendMessageIsOpen =  useSelector(selectSendMessageIsOpen);


  return (
    <Router>
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
          {/* Send mail is responsbile for actually transporting the messages to firebase */}
          {/* We set the SendMessageIsOpen to False so that the SendMail File isn't Open by Default when the Program Loads */}
          {sendMessageIsOpen && <SendMail/>}
          
        </div>
    </Router>
    
  );
}

export default App;
