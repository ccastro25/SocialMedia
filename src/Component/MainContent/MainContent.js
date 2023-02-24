import React,{Component} from "react";
import {Grid} from '@mui/material';
import SideBar from "../SideBar/SideBar";
import   "./MainContent.css"
import Avatar from '@mui/material/Avatar';
import StoryBoard from "../StoryBoard/StoryBoard";

import Post from "../Post/Post";
class MainContent extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div>
                 <Grid container >
                        <Grid    item xs={1}>

                            <SideBar/>
                  
                            </Grid>
                        <Grid  item xs={11}>
                        <div className="postBackGround">
                            <Grid item xs={7}>
                                <StoryBoard/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                                <Post/>
                            </Grid>
                            <Grid   item xs ={3}>
                            <div className="suggestions">
                                <div className="suggestionsText">Suggestions for you</div>
                                <div className="PicAndNameContainer">
                                    <div className="suggestionsPic"> <Avatar/> </div> 
                                    <div className="NameAndFollowContainer">
                                        <div className="Name">Raul</div>
                                        
                                        <div className="follow">Follow</div>
                                    </div>                                   
                                 </div>

                                 <div className="PicAndNameContainer">
                                    <div className="suggestionsPic"> <Avatar/> </div> 
                                    <div className="NameAndFollowContainer">
                                        <div className="Name">Raul</div>
                                        
                                        <div className="follow">Follow</div>
                                    </div>                                   
                                 </div>

                                 <div className="PicAndNameContainer">
                                    <div className="suggestionsPic"> <Avatar/> </div> 
                                    <div className="NameAndFollowContainer">
                                        <div className="Name">Raul</div>
                                        
                                        <div className="follow">Follow</div>
                                    </div>                                   
                                 </div>

                                 <div className="PicAndNameContainer">
                                    <div className="suggestionsPic"> <Avatar/> </div> 
                                    <div className="NameAndFollowContainer">
                                        <div className="Name">Raul</div>
                                        
                                        <div className="follow">Follow</div>
                                    </div>                                   
                                 </div>
                             </div>
                            </Grid>
                           </div>
                        </Grid>
                             
                        </Grid>

            </div>
        );
    }
}

export default MainContent;