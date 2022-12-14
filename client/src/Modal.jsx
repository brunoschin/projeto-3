import { useEffect } from "react";
import { useState } from "react";

export default function Modal(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [userType, setUserType] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imageObject, setImageObject] = useState(null);
    const [nameError, setNameError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [setSucessRegister, setSetSucessRegister] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('O email deve ser válido');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Ocorreu um erro ao fazer login');
    const [loading, setLoading] = useState(false);
    function reset() {
        setName('');
        setEmail('');
        setPassword('');
        setImage('');
        setImageFile(null);
        setImageObject(null);
        setNameError(false);
        setPassError(false);
        setImageError(false);
        setEmailError(false);
        setEmailErrorMessage('O email deve ser válido');
        setError(false);
        setErrorMessage('Ocorreu um erro ao fazer login');
    }
    useEffect(() => {
        reset();
    }, [props.modal])
    return props.modal === 1 ? <div className="modal">
        <div className="modal-content-header">
            <button onClick={() => {
                props.setModal(0)
                reset()
            }}>X</button>
        </div>
        <div className="modal-logo">
            <svg version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 130.5 48"
                xmlSpace="preserve" width="87" height="32">
                <path
                    d="M53.7 26.1V12.5h5.7v13.8c0 2.3 1.2 3.8 4 3.8 2.6 0 3.9-1.6 3.9-3.9V12.5H73v13.6c0 5.3-3.2 8.5-9.6 8.5-6.5.1-9.7-3.1-9.7-8.5zM75.6 17.7h5.1V20h.1c1.2-1.8 2.8-2.7 5.1-2.7 3.6 0 5.7 2.6 5.7 6.3v10.7h-5.3v-9.7c0-1.7-.9-2.9-2.6-2.9-1.7 0-2.9 1.5-2.9 3.5v9.1h-5.3V17.7zM94.3 11.2h5.3v4.3h-5.3v-4.3zm0 6.5h5.3v16.5h-5.3V17.7zM103.7 29.9V22h-2.2v-4.3h2.2v-5.2h5.1v5.2h3V22h-3v6.8c0 1.3.7 1.6 1.8 1.6h1.2v3.8c-.5.1-1.5.3-2.9.3-3 0-5.2-1-5.2-4.6zM115.1 35.6h1.8c1.5 0 2.2-.6 2.2-1.7 0-.7-.3-1.7-1-3.4l-4.9-12.7h5.5l2.2 7c.5 1.6 1 3.8 1 3.8h.1s.5-2.2 1-3.8l2.2-7h5.3l-5.7 16.7c-1.3 3.9-2.9 5.2-6.2 5.2h-3.4l-.1-4.1z">
                </path>
                <path className="st0"
                    d="M42.5 33.6V11.2L23.1 0v8.6l7.6 4.4c.3.2.3.6 0 .7l-9 5.2c-.3.2-.6.1-.8 0l-9-5.2c-.3-.1-.3-.6 0-.7l7.6-4.4V0L0 11.2v22.4-.1.1l7.4-4.3v-8.8c0-.3.4-.5.6-.4l9 5.2c.3.2.4.4.4.7v10.4c0 .3-.4.5-.6.4l-7.6-4.4-7.4 4.3L21.2 48l19.4-11.2-7.4-4.3-7.6 4.4c-.3.2-.6 0-.6-.4V26.1c0-.3.2-.6.4-.7l9-5.2c.3-.2.6 0 .6.4v8.8l7.5 4.2z">
                </path>
                <path
                    d="M21.2 48l19.4-11.2-7.4-4.3-7.6 4.4c-.3.2-.6 0-.6-.4V26.1c0-.3.2-.6.4-.7l9-5.2c.3-.2.6 0 .6.4v8.8l7.4 4.3V11.2L21.2 23.5V48z">
                </path>
                <path
                    d="M23.1 0v8.6l7.6 4.4c.3.2.3.6 0 .7l-9 5.2c-.3.2-.6.1-.8 0l-9-5.2c-.3-.1-.3-.6 0-.7l7.6-4.4V0L0 11.2l21.2 12.3 21.2-12.3L23.1 0z"
                    fill="gray"></path>
                <path className="st0"
                    d="M16.9 36.9l-7.6-4.4-7.4 4.3L21.3 48V23.5L0 11.2v22.4-.1.1l7.4-4.3v-8.8c0-.3.4-.5.6-.4l9 5.2c.3.2.4.4.4.7v10.4c.1.4-.2.7-.5.5z">
                </path>
            </svg>
        </div>
        <div className="modal-content-body">
            <div className="modalInput">
                <input type="email" placeholder="Email" value={email} onChange={e => {
                    setEmail(e.target.value)
                    if (e.target.value.length < 3) {
                        setEmailError(true)
                        setEmailErrorMessage('O email deve ter ao menos 3 caracteres')
                        return
                    } else {
                        setEmailError(false)
                    }
                    if (!e.target.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g)) {
                        setEmailError(true)
                        setEmailErrorMessage('O email deve ser válido')
                        return
                    } else {
                        setEmailError(false)
                    }
                }} />
                {emailError && <div>{emailErrorMessage}</div>}
            </div>
            <div className="modalInput">
                <input type="password" placeholder="Senha" value={password} onChange={e => {
                    setPassword(e.target.value)
                    if (e.target.value.length < 3) {
                        setPassError(true)
                    } else {
                        setPassError(false)
                    }
                }
                } />
                {passError && <div>A senha deve ter ao menos 3 caracteres</div>}
            </div>
            {error && <div className="geralError">{errorMessage}</div>}
            <div className="modal-buttons">
                <button onClick={async () => {
                    setLoading(true)
                    if (email.length < 3) {
                        setEmailError(true)
                        setEmailErrorMessage('O email deve ter ao menos 3 caracteres')
                    } else if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g)) {
                        setEmailError(true)
                        setEmailErrorMessage('O email deve ser válido');
                    } else if (password.length < 3) {
                        setPassError(true)
                    } else {
                        const response = await fetch('api/user/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/JSON'
                            },
                            body: JSON.stringify({
                                email: email, password: password
                            })
                        })
                        const data = await response.json()
                        if (data.error) {
                            setError(true)
                            setErrorMessage(data.error)
                        } else if (data.token) {
                            localStorage.setItem('token', data.token)
                            localStorage.setItem('email', email)
                            fetch(`api/user/`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/JSON',
                                    'x-access-token': data.token
                                },
                                body: JSON.stringify({ email })
                            }).then(response => response.json())
                                .then(data => {
                                    if (data.error) {
                                        props.setLogged(false)
                                    } else {
                                        props.setLogged(true)
                                        props.setUser(data.user)
                                    }
                                })
                            props.setModal(0)
                            reset()
                        }
                    }
                    setLoading(false)
                }} disabled={loading}> Entrar</button>
            </div>
        </div>
    </div > : props.modal === 2 ? <div className="modal">
        <div className="modal-content-header">
            <button onClick={() => {
                props.setModal(0)
                reset()
            }}>X</button>
        </div>
        <div className="modal-logo">
            <svg version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 130.5 48"
                xmlSpace="preserve" width="87" height="32">
                <path
                    d="M53.7 26.1V12.5h5.7v13.8c0 2.3 1.2 3.8 4 3.8 2.6 0 3.9-1.6 3.9-3.9V12.5H73v13.6c0 5.3-3.2 8.5-9.6 8.5-6.5.1-9.7-3.1-9.7-8.5zM75.6 17.7h5.1V20h.1c1.2-1.8 2.8-2.7 5.1-2.7 3.6 0 5.7 2.6 5.7 6.3v10.7h-5.3v-9.7c0-1.7-.9-2.9-2.6-2.9-1.7 0-2.9 1.5-2.9 3.5v9.1h-5.3V17.7zM94.3 11.2h5.3v4.3h-5.3v-4.3zm0 6.5h5.3v16.5h-5.3V17.7zM103.7 29.9V22h-2.2v-4.3h2.2v-5.2h5.1v5.2h3V22h-3v6.8c0 1.3.7 1.6 1.8 1.6h1.2v3.8c-.5.1-1.5.3-2.9.3-3 0-5.2-1-5.2-4.6zM115.1 35.6h1.8c1.5 0 2.2-.6 2.2-1.7 0-.7-.3-1.7-1-3.4l-4.9-12.7h5.5l2.2 7c.5 1.6 1 3.8 1 3.8h.1s.5-2.2 1-3.8l2.2-7h5.3l-5.7 16.7c-1.3 3.9-2.9 5.2-6.2 5.2h-3.4l-.1-4.1z">
                </path>
                <path className="st0"
                    d="M42.5 33.6V11.2L23.1 0v8.6l7.6 4.4c.3.2.3.6 0 .7l-9 5.2c-.3.2-.6.1-.8 0l-9-5.2c-.3-.1-.3-.6 0-.7l7.6-4.4V0L0 11.2v22.4-.1.1l7.4-4.3v-8.8c0-.3.4-.5.6-.4l9 5.2c.3.2.4.4.4.7v10.4c0 .3-.4.5-.6.4l-7.6-4.4-7.4 4.3L21.2 48l19.4-11.2-7.4-4.3-7.6 4.4c-.3.2-.6 0-.6-.4V26.1c0-.3.2-.6.4-.7l9-5.2c.3-.2.6 0 .6.4v8.8l7.5 4.2z">
                </path>
                <path
                    d="M21.2 48l19.4-11.2-7.4-4.3-7.6 4.4c-.3.2-.6 0-.6-.4V26.1c0-.3.2-.6.4-.7l9-5.2c.3-.2.6 0 .6.4v8.8l7.4 4.3V11.2L21.2 23.5V48z">
                </path>
                <path
                    d="M23.1 0v8.6l7.6 4.4c.3.2.3.6 0 .7l-9 5.2c-.3.2-.6.1-.8 0l-9-5.2c-.3-.1-.3-.6 0-.7l7.6-4.4V0L0 11.2l21.2 12.3 21.2-12.3L23.1 0z"
                    fill="gray"></path>
                <path className="st0"
                    d="M16.9 36.9l-7.6-4.4-7.4 4.3L21.3 48V23.5L0 11.2v22.4-.1.1l7.4-4.3v-8.8c0-.3.4-.5.6-.4l9 5.2c.3.2.4.4.4.7v10.4c.1.4-.2.7-.5.5z">
                </path>
            </svg>
        </div>
        <div className="modal-content-body">
            <div className="modalInput">
                <img src={imageObject || '/images/profile-pic-placeholder.webp'} alt="preview" className="modalImagePreview" />
            </div>
            <div className="modalInput">
                <input type="text" placeholder="Nome" value={name} onChange={e => {
                    setName(e.target.value)
                    if (e.target.value.length < 3) {
                        setNameError(true)
                    } else {
                        setNameError(false)
                    }
                }
                } />
                {nameError && <div>Campo nome deve conter ao menos 3 caracteres.</div>}
            </div>
            <div className="modalInput">
                <input type="email" placeholder="Email" value={email} onChange={e => {
                    setEmail(e.target.value)
                    if (e.target.value.length < 3) {
                        setEmailError(true)
                        setEmailErrorMessage('O email deve ter ao menos 3 caracteres')
                        return
                    } else {
                        setEmailError(false)
                    }
                    if (!e.target.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g)) {
                        setEmailError(true)
                        setEmailErrorMessage('O email deve ser válido')
                        return
                    } else {
                        setEmailError(false)
                    }
                }} />
                {emailError && <div>{emailErrorMessage}</div>}
            </div>
            <div className="modalInput">
                <input type="password" placeholder="Senha" value={password} onChange={e => {
                    setPassword(e.target.value)
                    if (e.target.value.length < 3) {
                        setPassError(true)
                    } else {
                        setPassError(false)
                    }
                }
                } />
                {passError && <div>A senha deve ter ao menos 3 caracteres</div>}
            </div>
            <div className="modalInput">
                <input type="file" accept="image/*" value={image} onChange={e => {
                    if (e.target.files[0].size > 4.4 * 1024 * 1024) {
                        setImageError(true)
                        return;
                    }
                    setImage(e.target.value)
                    if (e.target.files.length > 0) {
                        setImageFile(e.target.files[0])
                        setImageObject(URL.createObjectURL(e.target.files[0]));
                    }
                    if (e.target.value === '') {
                        setImageError(true)
                    } else {
                        setImageError(false)
                    }
                }
                } />
                {imageError && <div>Selecione uma imagem de perfil de no máximo 4.4MB</div>}
            </div>

            <div className="modalInput radio" >
                <label>
                    <input type="radio" value="user" checked={userType === 'user'} onChange={e => {
                        setUserType(e.target.value)
                    }} />
                    Usuário
                </label>
                <label>
                    <input type="radio" value="admin" checked={userType === 'admin'} onChange={e => {
                        setUserType(e.target.value)
                    }} />
                    Administrador
                </label>
            </div>

            {error && <div className="geralError">{errorMessage}</div>}
            <div className="modal-buttons">
                <button onClick={async () => {
                    setLoading(true)
                    if (name.length < 3) {
                        setNameError(true)
                    } else if (email.length < 3) {
                        setEmailError(true)
                        setEmailErrorMessage('O email deve ter ao menos 3 caracteres')
                    } else if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g)) {
                        setEmailError(true)
                        setEmailErrorMessage('O email deve ser válido');
                    } else if (password.length < 3) {
                        setPassError(true)
                    } else if (!imageFile) {
                        setError(true)
                        setErrorMessage('Selecione uma imagem de perfil')
                    } else if (userType === '') {
                        setError(true)
                        setErrorMessage('Selecione um tipo de usuário')
                    } else {
                        var formData = new FormData();
                        formData.append('name', name);
                        formData.append('email', email);
                        formData.append('password', password);
                        formData.append('role', userType);
                        formData.append('file', imageFile);
                        const response = await fetch('api/user/register', {
                            method: 'POST',
                            headers: {
                            },
                            body: formData
                        })
                        if (response.status === 500) { setLoading(false) }
                        const data = await response.json()
                        if (data.error) {
                            setError(true)
                            setErrorMessage(data.error)
                        } else if (data.token) {
                            props.setModal(0)
                            props.setLogged(true)
                            localStorage.setItem('token', data.token)
                            localStorage.setItem('email', email)
                        }
                        reset()
                        setSetSucessRegister(true)
                    }
                    setLoading(false)
                }} disabled={loading}>Registrar</button>
            </div>
            {setSucessRegister &&
                <div className="modalSucessRegister">
                    <div className="modalSucessRegisterContent">
                        <div className="modalSucessRegisterContentHeader">
                            <h1>Conta criada com sucesso!</h1>
                            <button onClick={() => {
                                props.setModal(1)
                                setSetSucessRegister(false)
                            }}>Login</button>
                        </div>
                    </div>
                </div>}
        </div>
    </div > : <></>
}