// The SendMail File is the Center Piece of the Whole Application as it is repsonsbile for Uploading our Mail on to Firebase.
// The Presence of React-Use form is that iy is a library that helps in validateing forms in React.

import React from 'react'
import "./SendMail.css"
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
 
function SendMail() {
    const {register, handleSubmit, watch , errors} = useForm()
    
    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className="sendmail">
            <div className="sendmail_header">
                <h3>Close Message</h3>
                
                <CloseIcon 
                 className="sendmail_close"
                 // the Purpose of the Click fucntion is to change the state of the sendMessage fucntion back to false which causes it to close
                 onClick={() => dispatch(closeSendMessage())}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" placeholder="To" type="email" ref={register({ required:true })}/>
                {errors.to && <p className="sendmail_error">To is Required</p>}

                <input name="subject" placeholder="Subject" type="text" ref={register({ required:true })} />
                {errors.subject && (<p className="sendmail_error">Subject is Required</p>)}

                <input name="message"
                    placeholder="Message" 
                    type="text" 
                    className="sendmail_message" 
                    ref={register({ required:true })}
                />
                {errors.message && (<p className="sendmail_error">Message is Required</p>)}

                <div className="sendmail_options">
                    <Button 
                        className="sendmail_send" 
                        variant="contained" 
                        color="primary" 
                        type="submit"
                    >Send</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SendMail
