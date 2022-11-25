import { useEffect, useState } from "react";

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
    return (<>
        {posts.length > 0 ? posts.map(post => <div key={post._id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <img alt="preview" src={post.file ? `api/file/id/${post.file}` : '/images/profile-pic-placeholder.webp'} />
        </div>) : <p>{message}</p>}
    </>)
}