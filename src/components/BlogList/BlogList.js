import React from 'react'
import {Blog} from './Blog'
import './BlogList.css'
function BlogList(props) {
    return (
        <div className="container">
            <h3>Recent Posts</h3>
            <ul id="list" className="list">
                {props.posts.length < 0 && <span>No Recent Posts</span>}
                {props.posts.map((post) => (
                    <Blog
                        key={post.id}
                        post={post}
                        deletePost={props.deletePost}
                        editPost={props.editPost}
                    />
                ))}
            </ul>
        </div>
    )
}

export default BlogList
