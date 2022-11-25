import Header from './Header'
import VideoPlayer from './VideoPlayer';
import { useState } from 'react';
import Modal from './Modal';
import Menu from './Menu';

export default function App() {
	const token = localStorage.getItem('token')
	const [logged, setLogged] = useState(token ? true : false);
	const [modal, setModal] = useState(0);
	return (
		<div className="App">
			<Header {...{ logged, setLogged, modal, setModal }} />
			{logged ? <Menu></Menu> : <VideoPlayer />}
			<Modal {...{ logged, setLogged, modal, setModal }} />
		</div>
	);
}