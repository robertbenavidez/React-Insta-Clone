import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    return (
        <div post-container>
            {props.posts.map(posty => <Post key={posty.imageUrl} post={posty} />)}
            <CommentSection />
        </div>
    );
};

export default PostContainer; 