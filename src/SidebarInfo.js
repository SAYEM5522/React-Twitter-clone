import React from 'react'
import "./SidebarInfo.css"
const SidebarInfo = ({Icon,title,active}) => {
  return (
    <div className={`sidebarInfo ${active && "sidebarInfo__active"}`}>
     {Icon && <Icon /> }
     <h3>{title}</h3>
    </div>
  )
}

export default SidebarInfo
