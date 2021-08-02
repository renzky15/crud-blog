import React, {useState} from 'react'
import BlogForm from './BlogForm/BlogForm'
import BlogList from './BlogList/BlogList'

export default function Blog() {
    const [posts, setPosts] = useState([{ text: "test"}])
    const [selectedPost, setSelectedPost] = useState()

    const addPost = (post) => {
        let postsCopy = [...posts, post]
        setPosts(postsCopy)

    }
    const deletePost = (id) => {
        const updatedCart = posts.filter((post) => post.id !== id)

        setPosts(updatedCart)
    }
    const editPost = (id) => {
        const selectedPost = posts.filter((post) => post.id === id)
        console.log(selectedPost)
        setSelectedPost(selectedPost)

       
    }
    const updatePost = (post) => {
        const postsCopy = [...posts]
        console.log(post)
        const index = posts.findIndex(data => data.id === post.id)
        console.log(index)
        postsCopy[index].text = post.text
       
        setPosts(posts)
        setSelectedPost('')
        window.alert('Updated Successfully')
    }
    return (
        <div className = "container">
            <h3 className = "container">Simple Blog Post</h3>
            <BlogForm updatePost = {updatePost} addPost={addPost} selectedPost = {selectedPost} />
            <BlogList posts={posts} deletePost={deletePost} editPost={editPost} />
        </div>
    )
}
