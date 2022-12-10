import { useEffect, useState } from "react";
import Post from "./Post";

export default function MyPost(props) {
    const [posts, setPosts] = useState();
    const [message, setMessage] = useState('');
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    const setUser = props.setUser
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
                localStorage.setItem('token', data.token)
            }
        }))
    }, [])
    useEffect(() => {
        if (email && token && posts) {
            fetch(`api/user/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON',
                    'x-access-token': token
                },
                body: JSON.stringify({ email })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        return;
                    }
                    setUser(data.user)
                })
        }
        // })
    }, [email, token, posts, setUser])
    return (<div className="posts-container">
        {posts && posts.length > 0 ? posts.map(post =>
            <Post key={post._id} {...post} />) :
            <p className="no-posts">{message.startsWith('Error:') ? message.replace('Error:', '') : message}</p>}
    </div>)
}