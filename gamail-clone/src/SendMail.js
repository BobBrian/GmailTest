// The SendMail File is the Center Piece of the Whole Application as it is repsonsbile for Uploading our Mail on to Firebase.

import React from 'react'
import "./SendMail.css"
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

function SendMail() {
    return (
        <div className="sendmail">
            <div className="sendmail_header">
                <h3>New Messages</h3>
                <CloseIcon/>
            </div>

            <form>
                <input placeholder="To" type="text"/>
                <input placeholder="Subject" type="text"/>
                <input placeholder="Message..." type="text" className="sendmail_message"/>

                <div className="sendmail_options">
                    <Button
                        className="sendmail_send"
                        variant="container"
                        color="primary"
                        type="submit"
                    >Send</Button>

                </div>
            
            </form>

        </div>
        
    )
}

export default SendMail
