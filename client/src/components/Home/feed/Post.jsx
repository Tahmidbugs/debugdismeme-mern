import React from 'react';
import './feed.css';
function Post({post}) {
    const [neutralimage, setNeutralimage] = React.useState(require("../../../assets/neutral_unclicked.png"));
    const [lolimage, setLolimage] = React.useState(require("../../../assets/lol_unclicked.png"));
    const[roflimage, setRoflimage] = React.useState(require("../../../assets/rofl_unclicked.png"));
    return (
        <div className='post'>
            <div className='post-wrapper'>
<div className="postTop">
    <div className="postTopLeft">
        <img src={post.profile_pic} alt="" className='postprofilepic'/>
        <div className="postTopLeftText">
        <span className="postUsername">{post.username}</span>
        <span className='postTime'>1 hour ago</span>
        </div>
    </div>
    <div className="postTopRight"></div>
    </div>
</div>
<div className="postCenter">
    <div><span className="postCaption">{post.caption}</span></div>
    <div className="postImage"><img src={post.pic} alt="" className='postimage'/></div>
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
