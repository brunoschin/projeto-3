import { useState } from "react";

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(undefined);
    const [filePath, setFilePath] = useState('');
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState('');
    const [status, setStatus] = useState('');
    return (<>
        <div className="createPostContainer">
            {error !== '' ? <p>{error}</p> : null}
            <input type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea placeholder="Escreva aqui..." value={description} onChange={e => setDescription(e.target.value)} />
            <input type="file" accept="image/*, video/*" value={filePath} onChange={e => {
                setError('')
                if (e.target.files[0].size > 4.4 * 1024 * 1024) {
                    setError('O arquivo deve ter no máximo 4.4MB')
                    setStatus('')
                    return;
                }
                setFilePath(e.target.value);
                setFile(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
            }} />
            {file && file.type.includes('image') ? <img className="preview" src={preview} alt="preview" /> :
                file && file.type.includes('video') ? <video className="preview" src={preview} controls /> :
                    <img alt="preview" className="preview" src={'/images/file-placeholder.png'} />}
            <button type="button" disabled={status === 'loading' ? true : false} onClick={() => {
                setError('');
                setStatus('loading');
                if (title.length < 3) {
                    setError('O título deve ter no mínimo 3 caracteres');
                    setStatus('');
                    return;
                }
                if (description.length < 3) {
                    setError('A descrição deve ter no mínimo 3 caracteres');
                    setStatus('');
                    return;
                }
                if (!file) {
                    setError('Selecione um arquivo');
                    setStatus('');
                    return;
                }

                console.log(file)
                // se o arquivo for maior que 4.4MB
                if (file.size > 4.4 * 1024 * 1024) {
                    setError('O arquivo deve ter no máximo 4.4MB');
                    setStatus('');
                    return;
                }
                const formData = new FormData();
                formData.append('title', title);
                formData.append('description', description);
                formData.append('file', file);
                fetch('api/post/', {
                    method: 'POST',
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    },
                    body: formData
                }).then(response => response.json().then(data => {
                    console.log(data)
                    if (data.error) {
                        setError(data.error)
                        setStatus('');
                    } else {
                        setStatus('success');
                    }

                    setTitle('');
                    setDescription('');
                    setFile(null);
                    setFilePath('');
                    setPreview(null);

                }))
            }}>Postar</button>
            {error === '' && status === 'loading' ? <p>Carregando...</p> : null}
            {error === '' && status === 'success' ? <p>Postado com sucesso!</p> : null}
        </div>
    </>)
}