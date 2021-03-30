// The Purpose of the Mail File is to Fully Despaly any message that a User might see in the Email Row Section along with extra Files 
// Such as Images or Videos as well as provide them the oppertunity to Return to that same Email Row Section

import React from 'react'
import "./Mail.css"
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from '@material-ui/icons/Error';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';


function Mail() {

    const history = useHistory(); // Here it create functionality that allows us to Revert to the Previous Page
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon/>
                    </IconButton>

                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>

                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>

                </div>

                <div className="mail_toolsRight">
                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>

                </div>    
            </div>
            <div className="mail_body">
                {/* Here all the hardcoded messages will be replaced with the selectedMail state since it replaces the payload
                and can be found in the state tab*/}
                <div className="mail_bodyHeader" >
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className="mail_important"/>
                    <ErrorIcon/>
                    <p>{selectedMail?.title}</p>
                    <p className="mail_time">{selectedMail?.time}</p>
                </div>
                
                <div className="mail_message">
                     <p>{selectedMail?.description}</p> 
                </div>
            </div>
        </div>
    )
}

export default Mail
