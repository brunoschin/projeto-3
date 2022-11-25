import { useState } from "react";

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [filePath, setFilePath] = useState('');
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState('');
    return (<>
        <div className="createPostContainer">
            {error !== '' ? <p>{error}</p> : null}
            <input type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea placeholder="Escreva aqui..." value={description} onChange={e => setDescription(e.target.value)} />
            <input type="file" accept="image/*, video/*" value={filePath} onChange={e => {
                setFilePath(e.target.value);
                setFile(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
            }} />
            <img alt="preview" className="preview" src={preview || '/images/file-placeholder.png'} />
            <button type="button" onClick={() => {
                if (title.length < 3) {
                    setError('O título deve ter no mínimo 3 caracteres');
                    return;
                }
                if (description.length < 3) {
                    setError('A descrição deve ter no mínimo 3 caracteres');
                    return;
                }
                if (file === null) {
                    setError('Selecione um arquivo');
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
                    if (data.error) {
                        setError(data.error)
                    }
                    setTitle('');
                    setDescription('');
                    setFile(null);
                    setFilePath('');
                    setPreview(null);
                }))
            }}>Postar</button>
        </div>
    </>)
}