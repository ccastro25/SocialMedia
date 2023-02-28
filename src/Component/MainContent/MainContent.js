import React,{Component} from "react";
import {Grid} from '@mui/material';
import SideBar from "../SideBar/SideBar";
import   "./MainContent.css"

import StoryBoard from "../StoryBoard/StoryBoard";

import Post from "../Post/Post";
import SuggestedConnections from "../SuggestedConnections/SuggestedConnections";





const MainContent= ()=> {
   

    return(
        <di>

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
                           <SuggestedConnections/>
                            </Grid>
                        </div>

                           
                        </Grid>
                             
           </Grid>
        </di>
    );
}


export default MainContent;