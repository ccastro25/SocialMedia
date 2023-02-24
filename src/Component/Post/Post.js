import React, { Component } from 'react';
import "./Post.css"
import Avatar from '@mui/material/Avatar';
import StoryBoard from "../StoryBoard/StoryBoard";
import palomo from "../../Images/palomo.png";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';

class Post extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                            <div className="PostContainer">
                                 <div className="PostHeader">
                                    <Avatar/><div ><div className="Name">Raul</div>
                                    <div className="postext">A person</div>
                                    </div>
                                </div>
                                
                                <img className="ImgPosted" src={palomo}/>
                                <div className="PostInteraction">
                                
                                 <div  className="PostIcons"><FavoriteBorderOutlinedIcon  /></div>

                                 <div className="PostIcons"><MapsUgcOutlinedIcon/></div>
                                 <div  className="PostIcons"><SendOutlinedIcon  /> </div>
                                 <div className="PostComments"><span>Peter</span> I see the progress</div>
                                 <div className="PostComments">
                                    <input className="commentBox" placeholder="Add a comment..."/>
                                 </div>
                                </div>
                            </div>
                               
              </div>
            
        );
    }
}
export default Post;