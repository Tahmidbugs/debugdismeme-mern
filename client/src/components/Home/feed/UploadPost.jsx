import axios from 'axios';
import React, { useContext, useRef } from 'react';
import {MdAddPhotoAlternate, MdCreate} from "react-icons/md";
import { AuthContext } from '../../../context/AuthContext';
import { RiCloseCircleFill } from "react-icons/ri";
import {GiFlamingArrow} from "react-icons/gi"
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
                const res = await axios.post('https://debugthismeme.onrender.com/api/upload', formData)
                console.log("urlres",res.data)
                newPost.imageURL= res.data;
            }
            catch(err){
                console.log("THE WRROR IS",err);
                alert(err);
            }
        

        }
        try{
            axios.post("https://debugthismeme.onrender.com/api/posts/", newPost);
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
                           
                                
                                   
                                    
                            <label htmlFor="file"  className="shareOption"  >
  <MdAddPhotoAlternate className="shareOptionIcon"/>
  <span  style={{backgroundColor:"#F9883E", fontWeight:"bold", color:"black", borderRadius:"5%"}} className="btn shareOptionText" >
    Upload a meme
    <input type="file" id='file' name='file' className="shareOptionInput" accept='.png,.jpeg,.jpg' onChange={(e)=> setFile(e.target.files[0])} style={{display:"none"}}/>
  </span>
</label>

                                <div className="shareOption">
                                    <MdCreate className="shareOptionIcon"/>
                                    {/* <span   >Create a meme</span> */}
                                    <button onClick={()=> setModalvisible(true)}  style={{backgroundColor:"#F9883E", fontWeight:"bold", color:"black", borderRadius:"5%"}} className="btn shareOptionText" type="button" data-toggle="modal" data-target="#myModal">
                                            Create a meme
                                        </button>
                                    </div>

                                   

</div>

        </div>
        {/* {modalvisible && <CreateMeme setModalvisible={setModalvisible} setCustomMeme={setCustomMeme}/>} */}
        <div className="sharebutton">
        <div className="shareOption">
                                    <GiFlamingArrow className="shareOptionIcon submiticon"/>
                                    {/* <span   >Create a meme</span> */}
                                    <button type="submit" style={{backgroundColor:"#F9883E", fontWeight:"bold", color:"black", borderRadius:"5%"}} className="btn shareOptionText" >
                                        Share
                                        </button>
                                        <GiFlamingArrow className="shareOptionIcon submiticon2"/>
                                    </div>
        {/* <button className="shareButton" type="submit">Share</button> */}
        

                        {modalvisible&&
                            <div className="modal fade" id="myModal" style={{display:"flex", alignItems:"center"}}>
                                <div className="modal-dialog"  >
                                <div className="modal-content" style={{backgroundColor:"rgba(20, 11, 1, 1.829)"}}>
                                
                                    
                                    <div className="modal-header">
                                    <p className="modal-title" style={{fontWeight:"bold", color:"#F9883E", fontSize:20, padding:10}}>Choose a template and create a meme</p>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    
                                
                                    <div className="modal-body">
                                    <CreateMeme setModalvisible={setModalvisible} setCustomMeme={setCustomMeme} modalvisible={modalvisible}/>
                                    </div>
                                    
                                    
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
}
        </div>

        </form>

       
        </div>
    );
}

export default UploadPost;