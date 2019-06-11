import React from 'react';
import PostHeader from './PostHeader';

const Post = props  => {
    return (
        <div className='post-wrapper' >
            <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl}/>
            <div className='image-wrapper'></div>

            <div className='comment-wrapper'></div>
        </div>
    )
}

export default Post; 