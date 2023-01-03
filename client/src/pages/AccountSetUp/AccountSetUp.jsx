import React, { useContext } from 'react';
import './AccountSetUp.css';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';



function AccountSetUp(props) {
    const [file, setFile] = React.useState(null);
    const {dispatch}= useContext(AuthContext);
    const [profilePicture,setProfilePicture]= useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const templateProfiles=["https://debugthismeme.s3.amazonaws.com/1.png","https://debugthismeme.s3.amazonaws.com/2.png","https://debugthismeme.s3.amazonaws.com/3.png","https://debugthismeme.s3.amazonaws.com/4.png","https://debugthismeme.s3.amazonaws.com/5.png"]
    const [selected,setSelected]= useState([false,false,false,false,false,false])
    const location = useLocation();
    const credentials = location.state;
    
    const handleAccountSetUp = async(e) => {
          
         e.preventDefault();
         
        credentials.profilePicture=profilePicture;
        if(file){
            
            const formData = new FormData();
            formData.append('file', file);
            
            try{
                const res = await axios.post('https://debugthismeme.onrender.com/api/upload', formData)
                setSelected(prev => prev.map((item, ind) => ind === 5 ? true : false));
                setProfilePicture(res.data);
                credentials.profilePicture=res.data;   
                 console.log(credentials)            
            }
            catch(err){
                console.log("THE WRROR IS",err);
                alert(err);
            }
        }

        dispatch({type: 'LOGIN_SUCCESS', payload: credentials});
        await axios.put(`/users/${credentials._id}`,credentials)
    }


    const selectProfilePicture =async(url,index)=>{
       if(index!=5)
        setFile(null);

        setProfilePicture(url);        
        setSelected(prev => prev.map((item, ind) => ind === index ? true : false));
    }

    return (
        <div className='AccountSetUp'>
            <div className='AccountSetUpwrapper'>
                <div className="AccountSetUpLeft">
                   <img src={require('../../assets/logo.png')} alt="debugdismeme" className="AccountSetUpLogo"/>
                   <span className="AccountSetUpText">Connect with programmers that have the same broken sense of humor as you</span>
                </div>
                <div className="AccountSetUpRight">
                    <h3 style={{fontWeight:"bold"}}>Hey {credentials.username}!!</h3>
                    <h4> Choose an avatar</h4>
                    <div>
                        {templateProfiles.map((item,index)=><img onClick={()=>selectProfilePicture(item,index)} className={`profilePicture`}  src={item} key={item} style={{height:100,width:100, borderRadius:50, border: selected[index] ? '8px solid black' : 'none'}}/>)}
                    </div>
                    <label htmlFor='file'>
                            <img  onClick={()=>selectProfilePicture(profilePicture,5)} className={`profilePicture`} i  src={file?URL.createObjectURL(file):"https://debugthismeme.s3.amazonaws.com/images.png"}  style={{height:100,width:100, borderRadius:50, border: selected[5] ? '8px solid black' : 'none'}}/>
                            <input type="file" id='file' name='file' className="shareOptionInput" accept='.png,.jpeg,.jpg' onChange={(e)=> setFile(e.target.files[0])} style={{display:"none"}}/>
                    </label>
                    <button onClick={handleAccountSetUp} className="AccountSetUpButton" type='submit' >Get started</button>
                </div>
                </div>
            
        </div>
    );
}

export default AccountSetUp;