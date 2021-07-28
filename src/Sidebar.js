import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SidebarInfo from './SidebarInfo';
import Button from '@material-ui/core/Button';
import Profile from './Profile';
const Sidebar = () => {
  return (
    <div className="sidebar">
     <TwitterIcon className="sidebar__icon"/>
     <SidebarInfo active  Icon={HomeIcon} title="Home"/>
     <div className="explore">
     <h1>#</h1>
     <h3>Explore</h3>
     </div>
   
     <SidebarInfo Icon={NotificationsNoneIcon} title="Notifications"/>
     <SidebarInfo Icon={MailOutlineIcon} title="Messages"/>
     <SidebarInfo Icon={BookmarkBorderIcon} title="Bookmarks"/>
     <SidebarInfo Icon={ListAltIcon} title="List"/>
     <SidebarInfo Icon={PersonOutlineIcon} title="Profile"/>
     <SidebarInfo Icon={MoreHorizIcon} title="More"/>
     <Button variant="outlined"> Tweet</Button>
     <Profile/>

    </div>
  )
}

export default Sidebar
