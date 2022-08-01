
import React from 'react';
import './sidebar.css';
import { MdRssFeed, MdChat, MdBookmark, MdPlayCircle, MdGroup, MdOutlineWc } from "react-icons/md";

function Sidebar(props) {
    return (
        <div className="sidebarcontainer" > 
            <div className="sidebarWrapper">
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                        <a href="#" className="sidebarlistitemlink">
                            <MdRssFeed className="sidebarlistitemicon" />
                            <span className="sidebarlistitemtext">Feed</span>
                        </a>
                    </li>
                    <li className="sidebarlistitem">
                        <a href="#" className="sidebarlistitemlink">
                            <MdChat className="sidebarlistitemicon" />
                            <span className="sidebarlistitemtext">Chat</span>
                        </a>
                    </li>
                    <li className="sidebarlistitem">
                        <a href="#" className="sidebarlistitemlink">
                            <MdBookmark className="sidebarlistitemicon" />
                            <span className="sidebarlistitemtext">Bookmarks</span>
                        </a>
                    </li>
                    <li className="sidebarlistitem">
                        <a href="#" className="sidebarlistitemlink">
                            <MdPlayCircle className="sidebarlistitemicon" />
                            <span className="sidebarlistitemtext">Videos</span>
                        </a>
                    </li>
                    <li className="sidebarlistitem">
                        <a href="#" className="sidebarlistitemlink">
                            <MdGroup className="sidebarlistitemicon" />
                            <span className="sidebarlistitemtext">Groups</span>
                        </a>
                    </li>
                    <li className="sidebarlistitem">
                        <a href="#" className="sidebarlistitemlink">
                            <MdOutlineWc className="sidebarlistitemicon" />
                            <span className="sidebarlistitemtext">Friends</span>
                        </a>
                    </li>
                </ul>
                <hr className="sidebarhr" />
                
            </div>
        </div>
    );
}

export default Sidebar;