import React from 'react';
import { MdMessage, MdPerson } from 'react-icons/md';
import './rightbar.css';
import {Link} from 'react-router-dom';
function Rightbar(props) {
    return (
        <div className='rightbar'>
            <div className="rightbarwrapper">
                <div className="rightbarheader">
                    <div>
                    <Link to="/profile">
                    <MdPerson className='rightbaricon'/>
                    </Link></div>
                    <div>
                    <MdMessage className='rightbaricon'/>
                    </div>
                </div>
                <hr className="rightbarhr" />
                <div className="rightbarbody">
                    <div className="rightbarbodyheader">
                        <h3>Fellow programmers</h3>
                    </div>
                    <div className="rightbarbodybody">
                        <div className="rightbarbodybodyitem">
                            <div className="rightbarbodybodyitemheader">
                                <img src={require("../../../assets/5.png")} alt="avatar" className="rightbarbodybodyitemheaderavatar"/>
                                <div className="rightbarbodybodyitemheadertext">
                                    <h4>John Doe</h4>
                                    <p>@johndoe</p>
                                </div>
                                </div>
                                
                                </div>
                                </div>
                                </div>
                    </div>
        </div>
    );
}

export default Rightbar;