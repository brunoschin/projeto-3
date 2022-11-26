import { useEffect, useState } from "react"

export default function Post(props) {
    const [file, setFile] = useState(undefined)
    useEffect(() => {
        fetch(`/api/file/id/${props.file}`)
            .then(res => res.blob().then(blob => {
                setFile({ type: blob.type, url: URL.createObjectURL(blob) })
            }))
    }, [props.file])
    return <div className="post-container">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        {file && file.type.includes('image') ? <img src={file.url} alt={props.title} /> : file && file.type.includes('video') ?
            <video src={file.url} controls /> : <></>}
    </div>
}