import React from 'react';
import './feed.css';
import UploadPost from './UploadPost';
import axios from 'axios';
import Post from './Post';
import CreateMeme from './CreateMeme';
function Feed({username}) {
    const[posts, setPosts] = React.useState([]);
    const fetchPosts = async() => {
        const res=  username? await axios.get(`/posts/profile/`+username) : await axios.get(`/posts`);
        setPosts(res.data.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
            }));

        // console.log("fetched posts: ",posts);

    }
    React.useEffect(() => {
        fetchPosts();
    }, [username]);
    
   
    return (
        <div className="feedcontainer">
            <div className="feedwrapper">
                {!username && <UploadPost/>}
                {posts.map((post)=>
                     <Post post={post} key={post._id}/>
                
                )}
               </div>
        
        </div>
    );
}

export default Feed;