// This Contain Information Related to the Section Tabs that Allow Us to Access different Types of Email
import React from 'react'
import "./Section.css"

function Section({Icon, title, color, selected}) {
return(
    // this has an embedded style tag
    <div className={`section ${selected && "section--selected"}`} 
    style= {{ borderBottom: `3px solid ${color}`, color: `${selected && color}`,}}>
        <Icon/>
        <h4>{title}</h4>
    </div>

        
) 
}

export default Section
