import React from 'react';
import Post from './Post';


const PostContainer = props => {
    return (
        <div post-container>
            {props.posts.map(posty => <Post key={posty.imageUrl} post={posty} />)}
        </div>
    );
};

export default PostContainer; 