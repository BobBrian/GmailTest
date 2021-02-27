// This Section deals with the Header that will incoperate the Email Menu , The Search Bar for Emails and The Profile Pic to 
//Log out of Emails
import React from 'react'
import "./Header.css"
import ListIcon from '@material-ui/icons/List';
import { IconButton ,Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

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
                <SearchIcon/>
                <input placeholder="Search Mail" type="text"/>
                <ArrowDropDownIcon className="header_inputlist"/>
                
            </div>

            <div className="headerright" >
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
