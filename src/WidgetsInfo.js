import React from 'react'
import {Avatar} from "@material-ui/core"
import Button from '@material-ui/core/Button';
import "./WidgetsInfo.css"
const WidgetsInfo = ({avatar,displayName,name}) => {
  return (
    
    <div className="widgetsInfo">
     <Avatar src={avatar} alt=""/>
     <div className="widgetsInfo__detail">
       <h4>{displayName}</h4>
       <p>{name}</p>
     </div>
     <Button>Follow</Button>
    </div>
    
  )
}

export default WidgetsInfo
