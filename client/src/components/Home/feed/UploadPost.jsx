import axios from 'axios';
import React, { useContext, useRef } from 'react';
import {MdAddPhotoAlternate, MdCreate} from "react-icons/md";
import { AuthContext } from '../../../context/AuthContext';
import { RiCloseCircleFill } from "react-icons/ri";

import './feed.css';
import CreateMeme from './CreateMeme';
function UploadPost(props) {
    const {user} = useContext(AuthContext);
    const caption= useRef();
    const [file, setFile] = React.useState(null);
    const [modalvisible, setModalvisible] = React.useState(false);
    const [topCaption, setTopCaption] = React.useState('');
    const [bottomCaption, setBottomCaption] = React.useState('');
    const [customMeme, setCustomMeme] = React.useState(null);
    const handleUpload = async(e) => {
        
        e.preventDefault();
        const newPost ={
            userid: user._id,
            caption: caption.current.value,
        }
        if(customMeme){
            newPost.imageURL = customMeme.template;
            newPost.topCaption= customMeme.topCaption;
            newPost.bottomCaption= customMeme.bottomCaption;
            newPost.customMeme = true;
            console.log("newPost: ",newPost);

        }
        if(file){
            
            const formData = new FormData();
            formData.append('file', file);
            
            try{
                const res = await axios.post('/upload', formData)
                console.log("urlres",res.data)
                newPost.imageURL= res.data;
            }
            catch(err){
                console.log("THE WRROR IS",err);
                alert(err);
            }
        

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
                    <img className="shareTopImg" src={user.profilePicture}/>
                    <input placeholder={`Hey ${user.username }! Write a pun / share a meme`} className='shareInput' ref={caption}/>
                   </div>
                   <hr className="shareHr"/>
                   {customMeme &&  ( <div className='thumbnailContainer'><img className="thumbnail" src={customMeme.template} alt=""/>
                   <RiCloseCircleFill className="closeIcon" onClick={()=>setCustomMeme(null)

                }/>
                   {customMeme && <h1 className="topCaptionThumbnail">{customMeme.topCaption}</h1>}
                   {customMeme && <h1 className="bottomCaptionThumbnail">{customMeme.bottomCaption}</h1>} 
                   </div>)}
                  
                   {file && ( <div className='thumbnailContainer'><img className="thumbnail" src={URL.createObjectURL(file)} alt=""/>
                   <RiCloseCircleFill className="closeIcon" onClick={()=>setFile(null)}/> 
                   </div>)}
                     <div className="shareBottom">
                            <div className="shareOptions">
                                <label htmlFor='file' className="shareOption">
                                    <MdAddPhotoAlternate className="shareOptionIcon"/>
                                    <span className="shareOptionText"><button class="btn btn-primary">Upload a meme</button></span>
                                    <input type="file" id='file' name='file' className="shareOptionInput" accept='.png,.jpeg,.jpg' onChange={(e)=> setFile(e.target.files[0])} style={{display:"none"}}/>
                                    </label>
                                <div className="shareOption">
                                    <MdCreate className="shareOptionIcon"/>
                                    {/* <span   >Create a meme</span> */}
                                    <button onClick={()=> setModalvisible(true)} className="shareOptionText" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                            Create meme
                                        </button>
                                    </div>

                                   

</div>

        </div>
        {/* {modalvisible && <CreateMeme setModalvisible={setModalvisible} setCustomMeme={setCustomMeme}/>} */}
        <div className="sharebutton">
        <button className="shareButton" type="submit">Share</button>
        

  
                            <div class="modal fade" id="myModal">
                                <div class="modal-dialog" >
                                <div class="modal-content" style={{backgroundColor:"black"}}>
                                
                                    
                                    <div class="modal-header">
                                    <h4 class="modal-title">Choose a template and create a meme</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    
                                
                                    <div class="modal-body">
                                    <CreateMeme setModalvisible={setModalvisible} setCustomMeme={setCustomMeme}/>
                                    </div>
                                    
                                    
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
        </div>

        </form>

       
        </div>
    );
}

export default UploadPost;