import React from 'react'
import "./Header.css"
import ListIcon from '@material-ui/icons/List';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="headerleft">
                <IconButton>
                    <ListIcon/>
                </IconButton>
                <img src="http://auburn.edu/oit/yearreview/2018/_images/email.png" alt=""/>
            </div>

            <div className="headermiddle">
                
            </div>

            <div className="headerright" >
                
            </div>
        </div>
    )
}

export default Header
