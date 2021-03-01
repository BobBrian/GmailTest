// The Sidebar Option will be used for Storing Categories for Mail such as the Inox, Spam and Drafted
import React from 'react'

function SidebarOption({Icon, title }) {
    return (
        <div className="sidebarOption">
            <Icon/>
            <h3>{title}</h3>
        </div>
    )
}

export default SidebarOption
