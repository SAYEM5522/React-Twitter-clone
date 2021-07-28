import React from 'react'
import "./Profile.css"
import {Avatar} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Profile = () => {
  return (
    <div className="profile">
     <Avatar src="https://instagram.fdac34-1.fna.fbcdn.net/v/t51.2885-19/s150x150/90234518_2538172506442150_3853061954910289920_n.jpg?_nc_ht=instagram.fdac34-1.fna.fbcdn.net&_nc_ohc=QFSYvXUNCIMAX97m6eW&tp=1&oh=f8762e6c79250cf1db801a089278fe5b&oe=600BB222"/>
     <div className="profile__info">
       <h4>md sayem</h4>
       <p>@mdsayem05370683</p>
     </div>
     <ExpandMoreIcon/>
    </div>
  )
}

export default Profile
