import Header from './Header'
import VideoPlayer from './VideoPlayer';
import { useState } from 'react';
import Modal from './Modal';
import Menu from './Menu';
import { useEffect } from 'react';

export default function App() {
	const token = localStorage.getItem('token')
	const email = localStorage.getItem('email')
	const [logged, setLogged] = useState(false);
	const [modal, setModal] = useState(0);
	const [user, setUser] = useState()
	useEffect(() => {
		if (email && token) {
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
						setLogged(false)
						return;
					}
					setLogged(true)
					setUser(data.user)
				})
		}
	}, [])
	return (
		<div className="App">
			<Header {...{ logged, setLogged, modal, setModal, user }} />
			{logged ? <Menu {...{ user, setUser }}></Menu> : <VideoPlayer />}
			<Modal {...{ logged, setLogged, modal, setModal, user, setUser }} />
		</div>
	);
}