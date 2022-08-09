import axios from 'axios';
import React, { useContext, useRef } from 'react';
import {MdAddPhotoAlternate, MdCreate} from "react-icons/md";
import { AuthContext } from '../../../context/AuthContext';
import './feed.css';
function UploadPost(props) {
    const {user} = useContext(AuthContext);
    const caption= useRef();
    const [file, setFile] = React.useState(null);

    const handleUpload = async(e) => {
        e.preventDefault();
        const newPost ={
            userid: user._id,
            caption: caption.current.value,

        }
        try{
            axios.post("/posts/", newPost);
            window.location.reload();
        }
        catch(err){
            console.log(err);
        }

    }
    return (
       
            <div className="uploadpostcontainer">
                <form className="uploadpostwrapper" onSubmit={handleUpload}>
                   <div className="shareTop">
                    <img className="shareTopImg" src={require("../../../assets/7.png")}/>
                    <input placeholder={`Hey ${user.username }! Write a pun / share a meme`} className='shareInput' ref={caption}/>
                   </div>
                   <hr className="shareHr"/>
                     <div className="shareBottom">
                            <div className="shareOptions">
                                <label htmlFor='file' className="shareOption">
                                    <MdAddPhotoAlternate className="shareOptionIcon"/>
                                    <span className="shareOptionText">Upload a meme</span>
                                    <input type="file" id='file' className="shareOptionInput" accept='.png,.jpeg,.jpg' onChange={(e)=> setFile(e.target.files[0])} style={{display:"none"}}/>
                                    </label>
                                <div className="shareOption">
                                    <MdCreate className="shareOptionIcon"/>
                                    <span className="shareOptionText">Create a meme</span>
                                    </div>

                                   

</div>
        </div>
        <div className="sharebutton">
        <button className="shareButton" type="submit">Share</button>
        </div>
        </form>

        
        </div>
    );
}

export default UploadPost;