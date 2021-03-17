// The SendMail File is the Center Piece of the Whole Application as it is repsonsbile for Uploading our Mail on to Firebase.
// The Presence of React-Use form is that iy is a library that helps in validateing forms in React.

import React from 'react'
import "./SendMail.css"
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

function SendMail() {

    const { register, handleSubmit, watch, errors} = useForm();

    const onSubmit = (formData) =>{
        console.log(formData); // This is here to display the entered data in the Pages Element Section . Now We Need to Dispaly it onto the Screen

    }



    return (
        <div className="sendmail">
            <div className="sendmail_header">
                <h3>New Messages</h3>
                <CloseIcon  className="sendmail_close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    placeholder="to" 
                    type="text"
                    ref={register({required: true})} // this right here is a validation rule that wont allow this fields to be entered unless
                    // the user is registered within the system
                />
                {/* Next is the Implementation of Error Messages When fields are not Filled in */}
                {errors.to && (<p className="sendmail_error">To is Required</p>)}


                <input 
                    placeholder="subject" 
                    type="text"
                    ref={register({required: true})}
                />
                {errors.subject && (<p className="sendmail_error">Subject is Required</p>)}

                <input 
                    placeholder="message..." 
                    type="text" 
                    className="sendmail_message"
                    ref={register({required: true})}
                />
                {errors.message && (<p className="sendmail_error">Message is Required</p>)}

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
