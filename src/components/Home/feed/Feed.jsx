import React from 'react';
import './feed.css';
import UploadPost from './UploadPost';
import Post from './Post';
function Feed(props) {
    return (
        <div className="feedcontainer">
            <div className="feedwrapper">
                <UploadPost/>
                <Post/>
                <Post/>
                <Post/>
               </div>
        
        </div>
    );
}

export default Feed;