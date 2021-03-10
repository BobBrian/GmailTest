// The Purpose of this Layer is to Display all Recived Mail , both Displaying the Message and the Sender
// And Giving the Users the Ability to Move Inbetween Tabs/Sections of Mail

import React from 'react'
import "./EmailList.css"
import { IconButton , Checkbox } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailSettings">
                <div className="emailSettingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailSettingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                <Section Icon={InboxIcon} title="primary" color="red" selected/>
                <Section Icon={PeopleIcon} title="social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green"/>

            </div>
            <div className="emailList_List">
                {/* Keep Note that the Message here is mere Dummy Data at the Current Moment*/}
                <EmailRow
                    tile = "Twitch"
                    subject = "Hey Fellow Streamers"
                    description = "This is a Test Message"
                    time = "10pm,"
                />

                <EmailRow
                    tile = "Twitch"
                    subject = "Hey Fellow Streamers"
                    description = "This is Cool"
                    time = "11pm,"
                />

            </div>
        </div>
    )
}

export default EmailList
