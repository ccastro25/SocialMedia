import React, { Component } from 'react';
import "./SuggestedConnections.css"
import Avatar from '@mui/material/Avatar';
class SuggestedConnections extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
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
            </div>
        );
    }
}

export default SuggestedConnections;