import React, { Component } from 'react'
import   "./StoryBoard.css"
import Avatar from '@mui/material/Avatar';

class StoryBoard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                 
                <div className="StoryBar">
                <Avatar   className="storyAvatar"   sx={{ width: 56, height: 56 }} alt="Remy Sharp"   />
                <Avatar   className="storyAvatar"   sx={{ width: 56, height: 56 }} alt="Remy Sharp"   />
                <Avatar   className="storyAvatar"   sx={{ width: 56, height: 56 }} alt="Remy Sharp"   />
                <Avatar   className="storyAvatar"   sx={{ width: 56, height: 56 }} alt="Remy Sharp"   />
                <Avatar   className="storyAvatar"   sx={{ width: 56, height: 56 }} alt="Remy Sharp"   />
                <Avatar   className="storyAvatar"   sx={{ width: 56, height: 56 }} alt="Remy Sharp"   />
                <Avatar   className="storyAvatar"   sx={{ width: 56, height: 56 }} alt="Remy Sharp"   />
                <Avatar   className="storyAvatar"   sx={{ width: 56, height: 56 }} alt="Remy Sharp"   />
                <Avatar   className="storyAvatar"   sx={{ width: 56, height: 56 }} alt="Remy Sharp"   />
                <Avatar   className="storyAvatar"   sx={{ width: 56, height: 56 }} alt="Remy Sharp"   />
                </div>
                            
            </div>
        );
    }
}

export default StoryBoard;