import React from "react"
import './BlogList.css'
export const Blog = ({ post, deletePost, editPost}) => {
    return (
        <li>
            {post.text}
          
            <div>
            <button onClick={() => editPost(post.id)} className="edit-btn" >
            <i class="far fa-edit"></i>
            </button>
            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deletePost(post.id) }} className="delete-btn">
            <i class="far fa-trash-alt"></i>
            </button>
           
            </div>
        </li>
    )
}
