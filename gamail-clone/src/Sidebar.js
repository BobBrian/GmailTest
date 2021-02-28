// This is the Sidebar the divides up the recived mail form the Inbox to Draft Mails
// But the Most Important Function is the Compose Button that allows for the Creation of Mail

import { Button } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from "@material-ui/icons/Add"
import SidebarOption from './SidebarOption'
import InboxIcon from "@material-ui/icons/Inbox"

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" className="sidebarcompose"/>}>
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={}/>
        </div>
    )
}

export default Sidebar
