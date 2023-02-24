import React, { Component } from 'react'
import {Grid} from '@mui/material';
import './SideBar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';


class SideBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                              <div className='sideBar'>
                            <div className="MainIcons" >
                                <AllInclusiveOutlinedIcon sx={{ fontSize: 30, color:'white' }}/>
                                </div>
                                <div className="sideIconsContainer">
                                    <div  className="SideIcons"><HomeOutlinedIcon  sx={{ fontSize: 30, color:'white' }} /></div>
                                    
                                    <div  className="SideIcons"><SearchIcon   /></div>
                                    <div  className="SideIcons"><ExploreOutlinedIcon   /></div>
                                    <div  className="SideIcons"><SendOutlinedIcon  /> </div>
                                    <div  className="SideIcons"><FavoriteBorderOutlinedIcon  /></div>
                                    <div  className="SideIcons"><AddOutlinedIcon   /></div>
                                    <div  className="profileAvitar">
                                    <Avatar   alt="Remy Sharp"   />
                                    </div>
                                    
                                </div>
                                <div className="MenuIcon" ><MenuIcon sx={{ fontSize: 35 }}/></div>
                            </div>
            </div>
        );
        
    }
}

export default SideBar;