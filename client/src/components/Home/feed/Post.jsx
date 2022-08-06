import React from 'react';
import './feed.css';
import axios from 'axios';
import TimeAgo from 'timeago-react';
import {Link} from 'react-router-dom';
function Post({post}) {
    const [neutralimage, setNeutralimage] = React.useState(require("../../../assets/neutral_unclicked.png"));
    const [lolimage, setLolimage] = React.useState(require("../../../assets/lol_unclicked.png"));
    const[roflimage, setRoflimage] = React.useState(require("../../../assets/rofl_unclicked.png"));
    const[user, setUser] = React.useState({});  
    
    const fetchUser = async() => {
        await axios.get(`/users?userid=${post.userid}`)
        .then(res => {
            setUser(res.data);
        }
        ).catch(err => {
            console.log(err);
        }
        );
        console.log("fetched user: ",user);
    }
    React.useEffect(() => {
        fetchUser();
    }
    , []);


    return (
        <div className='post'>
            <div className='post-wrapper'>
<div className="postTop">
    <div className="postTopLeft">
        <Link to={`profile/${user.username}`}>
        <img src={user.profilePicture} alt="" className='postprofilepic'/>
        </Link>
        <div className="postTopLeftText">
        <span className="postUsername">{user.username}</span>
        <span className='postTime'><TimeAgo
  datetime={post.createdAt}
    locale="en-US"
/></span>
        </div>
    </div>
    <div className="postTopRight"></div>
    </div>
</div>
<div className="postCenter">
    <div><span className="postCaption">{post.caption}</span></div>
    {post.imageURL && <div className="postImage"><img src={post.imageURL} alt="" className='postimage'/></div>}
</div>
<div className="postBottom">
    <div className="postBottomLeft">
        <div className="postBottomLeftIcon">
            <img src={neutralimage} alt="" className='postReaction' onMouseEnter={()=>setNeutralimage(require("../../../assets/neutral_clicked.png"))} onMouseOut={()=>setNeutralimage(require("../../../assets/neutral_unclicked.png"))}/>
            <img src={lolimage} alt="" className='postReaction' onMouseEnter={()=>setLolimage(require("../../../assets/lol_clicked.png"))} onMouseOut={()=>setLolimage(require("../../../assets/lol_unclicked.png"))}/>
            <img src={roflimage} alt="" className='postReaction' onMouseEnter={()=>setRoflimage(require("../../../assets/rofl_clicked.png"))} onMouseOut={()=>setRoflimage(require("../../../assets/rofl_unclicked.png"))} />

            </div>
</div>
</div>
            
        </div>
    );
}

export default Post;
