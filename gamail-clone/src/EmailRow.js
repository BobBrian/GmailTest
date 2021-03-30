// Responsible for Rendering the Emails in a Row of Information showing the Sender , Bits of the Message and the Time it was Sent
// Also Allows Users to Click on the Message to Expand the Message and get Extra Infromation 

import React from 'react'
import "./EmailRow.css"
import { IconButton } from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox"
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';


function EmailRow({id, title, subject,  description , time}) {

    const history = useHistory() // Gives us the History of the Web Page. Esstentily allows us to push a Webpage onto our Browser
    const dispatch = useDispatch();

    // constatn variable to redirect to the mail
    const openMail = () =>{
        dispatch(selectMail({
            //these will be the selected mail inside the state.
            id, 
            title, 
            subject, 
            description, 
            time
        }));

        history.push("/mail") // redirects them directly to the mail
        
    }

    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow_Options">
                <Checkbox/>
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>

            <h3 className="emailRow_Title"> {title} </h3>

            <div className="emailRow_Message">
                <h4>
                    {subject}{" "} 
                    <span className="emailRow_description">{description}</span>
                </h4>
            </div>

            <div className="emailRow_time">{time}</div>
            
        </div>
    )
}

export default EmailRow
