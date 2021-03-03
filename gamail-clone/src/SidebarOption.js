// The Sidebar Option will be used for Storing Categories for Mail such as the Inox, Spam and Drafted
import React from 'react'
import "./SidebarOption.css"

function SidebarOption({Icon, title, number , selected}) {
    return (
        <div className={`sidebarOption ${selected && 'sidebar--active'}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
