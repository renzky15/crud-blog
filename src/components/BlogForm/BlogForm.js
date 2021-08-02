import React, {useState, useEffect} from 'react'
import './BlogForm.css'
import { v4 as uuid } from "uuid"

function BlogForm({addPost, selectedPost, updatePost}) {
    const [text, setText] = useState('')

    useEffect(() => {
        setText(selectedPost ? selectedPost[0].text : '')
        
    }, [selectedPost])

    const handleAddPost = (e) => {
        e.preventDefault()
        if (selectedPost) {

            updatePost({
                id: selectedPost ? selectedPost[0].id : uuid(),
                text,
             
            })
            console.log('UPDAAATEE')
        } else {
            addPost({
                id: uuid(),
                text,
               
            })
            
        }


        

        setText("")
     
    }
    return (
        <div>
            <div className="container">
            <div className="form-container">
                <form onSubmit = {handleAddPost}>
                    <div className="row-element">
                        

                        <div className="text-area">
                            <textarea
                                name="tweet-text"
                                placeholder="What's happening"
                                autoFocus
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                            />
                        </div>
                    </div>
                    <div id="tweet-btn-container">
                        <button className="tweet-btn">{selectedPost ? 'Update Post' : 'Create Post'}</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default BlogForm
