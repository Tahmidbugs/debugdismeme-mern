import React from 'react';
import {MdAddPhotoAlternate, MdCreate} from "react-icons/md";
import './feed.css';
function UploadPost(props) {
    return (
       
            <div className="uploadpostcontainer">
                <div className="uploadpostwrapper">
                   <div className="shareTop">
                    <img className="shareTopImg" src={require("../../../assets/7.png")}/>
                    <input placeholder='Write a pun / share a meme' className='shareInput'/>
                   </div>
                   <hr className="shareHr"/>
                     <div className="shareBottom">
                            <div className="shareOptions">
                                <div className="shareOption">
                                    <MdAddPhotoAlternate className="shareOptionIcon"/>
                                    <span className="shareOptionText">Upload a meme</span>
                                    </div>
                                <div className="shareOption">
                                    <MdCreate className="shareOptionIcon"/>
                                    <span className="shareOptionText">Create a meme</span>
                                    </div>

                                   

</div>
        </div>
        <div className="sharebutton">
        <button className="shareButton">Share</button>
        </div>
        </div>

        
        </div>
    );
}

export default UploadPost;