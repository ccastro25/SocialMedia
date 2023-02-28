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
import { UserAuth } from '../../Context/AuthContext'; 
import {  useNavigate } from 'react-router-dom';

    const SideBar =()=>{
        const { user,logout } = UserAuth();
        const navigate = useNavigate()
         console.log(user.email);

         const handleSubmit = async()=>{
            try{
                await logout()
                navigate("/")
            }catch(e){
                console.log(e.message)
            }
         }
            
        return(
            <div>
                              <div className='sideBar'>
                            <div className="MainIcons" >
                            <div  className="SideIcons">
                                <AllInclusiveOutlinedIcon sx={{ fontSize: 30, color:'white' }}/>
                                </div>
                                </div>
                                <div className="sideIconsContainer">
                                    <div  className="SideIcons"><HomeOutlinedIcon  sx={{ fontSize: 30, color:'white' }} />
                                        <div className='SideIconText'>Home</div>
                                    </div>
                                    
                                    <div  className="SideIcons"><SearchIcon   /> 
                                        <div className='SideIconText'>Search</div>
                                    </div>
                                    <div  className="SideIcons"><ExploreOutlinedIcon   />
                                        <div className='SideIconText'>Explore</div>
                                    </div>
                                    <div  className="SideIcons"><SendOutlinedIcon  />
                                        <div className='SideIconText'>Messages</div>
                                     </div>
                                    <div  className="SideIcons"><FavoriteBorderOutlinedIcon  />
                                            <div className='SideIconText'>Notifications</div>
                                    </div>
                                    <div  className="SideIcons"><AddOutlinedIcon   />
                                        <div className='SideIconText'>Create</div>
                                    </div>
                                    <div  className="SideIcons">
                                        
                                            
                                        <Avatar  sx={{ width: 30, height: 30 }} alt="Remy Sharp"   />
                                        <div className='SideIconText'>{user.email}</div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="SideIcons" ><MenuIcon sx={{ fontSize: 35 }}/>
                                <button onClick={handleSubmit} className='SideIconText' >Sign Out</button>
                                </div>
                            </div>
            </div>
        );
        
    
}

export default SideBar;