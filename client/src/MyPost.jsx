import { useEffect, useState } from "react";
import Post from "./Post";

export default function MyPost() {
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/my-posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            }
        }).then(response => response.json().then(data => {
            if (data.error) {
                setMessage(data.error)
            }
            else {
                setPosts(data.posts)
            }
        }))
    }, [])
    return (<div className="posts-container">
        {posts.length > 0 ? posts.map(post =>
            <Post key={post._id} {...post} />) :
            <p className="no-posts">{message.startsWith('Error:') ? message.replace('Error:', '') : message}</p>}
    </div>)
}