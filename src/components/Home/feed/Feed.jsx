import React from 'react';
import './feed.css';
import UploadPost from './UploadPost';
import Post from './Post';
import { Posts } from '../../../data/postdata';
function Feed(props) {
    return (
        <div className="feedcontainer">
            <div className="feedwrapper">
                <UploadPost/>
                {Posts.map((post)=>
                     <Post post={post} key={post.id}/>
                
                )}
               </div>
        
        </div>
    );
}

export default Feed;