import React,{useState} from 'react'
import "./Feed.css"
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import {Avatar} from "@material-ui/core"
import ImageIcon from '@material-ui/icons/Image';
import GifIcon from '@material-ui/icons/Gif';
import SubjectIcon from '@material-ui/icons/Subject';
import MoodIcon from '@material-ui/icons/Mood';
import EventIcon from '@material-ui/icons/Event';
import Button from '@material-ui/core/Button';
import Post from './Post';


const Feed = () => {
  const [input,setInput]=useState("")

  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(input)
      setInput(" ")
  }
  return (
    <div className="feed">
     <div className="fedd__header">
       <h3>Home </h3>
      <StarOutlineIcon/>
     </div>
     <div className="post__info">

    
     <div className="post__header">
        <div className="post__header--top">
          <Avatar
          src="https://instagram.fdac34-1.fna.fbcdn.net/v/t51.2885-19/s150x150/90234518_2538172506442150_3853061954910289920_n.jpg?_nc_ht=instagram.fdac34-1.fna.fbcdn.net&_nc_ohc=QFSYvXUNCIMAX97m6eW&tp=1&oh=f8762e6c79250cf1db801a089278fe5b&oe=600BB222"
          style={{width:"48px",height:"48px" ,marginRight:"5px"}} />
          <form>
            <input onChange={(e)=>setInput(e.target.value)} type="text"placeholder="What's happening"/>
            <button onClick={handleSubmit} type="submit">button</button>
          </form>
        </div>
        <div className="post__header--bottom">
      <div className="post__header--bottom__left">
        <ImageIcon style={{padding:"10px",borderRadius:"99px"}}/>
        <GifIcon style={{fontSize:"15px",border:"3px solid #1da1f2"}}/> 
        <SubjectIcon style={{padding:"10px",borderRadius:"99px"}}/> 
        <MoodIcon style={{padding:"10px",borderRadius:"99px"}}/> 
        <EventIcon style={{padding:"10px",borderRadius:"99px"}}/>
      <Button>Tweet</Button>

      </div>
        </div>
     </div>
     <div className="feed__post">
     <Post/>
     <Post/> 
     <Post/> 
     <Post/>
     </div>
     </div> 
    </div>
  )
}

export default Feed
