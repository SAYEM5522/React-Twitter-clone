import React from 'react'
import "./Post.css"
import {Avatar} from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


const Post = () => {
  return (
    <div className="post">
    <Avatar src="https://instagram.fdac34-1.fna.fbcdn.net/v/t51.2885-19/s150x150/90234518_2538172506442150_3853061954910289920_n.jpg?_nc_ht=instagram.fdac34-1.fna.fbcdn.net&_nc_ohc=QFSYvXUNCIMAX97m6eW&tp=1&oh=f8762e6c79250cf1db801a089278fe5b&oe=600BB222"
    
    style={{marginRight:"10px",width:"48px",height:"48px"}}/>
    <div className="post__left">
      <div className="post__left--top">
      <h4>
        md sayem <span>
      <VerifiedUserIcon/> 
        </span>
      </h4>
      <p>@mdsayem .9h</p>
      <ExpandMoreIcon className="post__icon"/>
      </div>
   <p className="post__caption">
   Hey y’all! Go listen to my song #UnderTheMistletoe on Apple Music’s Essential Christmas playlist!! Happy holidays 
   @AppleMusic
   ! https://music.apple.com/us/pl
   </p>
      <img className="post__img" src="https://pbs.twimg.com/media/EpnaKNoXEAAmimm?format=jpg&name=small" alt=""/>
      <div className="post__left--bottom">
        <div className="post__left--bottom__opton">
        < ChatBubbleOutlineIcon/>
        <p>37</p>
        </div>
        <div className="post__left--bottom__opton">
        < SyncAltIcon/>
        <p>20</p>
        </div>
        <div className="post__left--bottom__opton">
        < FavoriteBorderIcon/>
        <p>50</p>
        </div>
        <div className="post__left--bottom__opton">
        < ArrowUpwardIcon/>
        <p>35</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Post
