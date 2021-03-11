// Responsible for Rendering the Emails in a Row of Information showing the Sender , Bits of the Message and the Time it was Sent
// Also Allows Users to Click on the Message to Expand the Message and get Extra Infromation 

import React from 'react'
import "./EmailRow.css"
import { IconButton } from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox"
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router';


function EmailRow({id, title, subject,  description , time}) {

    const history = useHistory() // Gives us the History of the Web Page. Esstentily allows us to push a Webpage onto our Browser

    return (
        <div onClick={() => history.push("/mail")} className="emailRow">
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
