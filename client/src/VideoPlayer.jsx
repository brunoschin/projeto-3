export default function VideoPlayer(props) {
    return <>
        <div className="text-video-overlay">
            <div>
                <p>O FUTURO É SEU</p>
                <h1>A principal plataforma de criação de conteúdo em tempo real do mundo</h1>
                <button>Veja os planos e preços</button>
            </div>
            <span className="img">

            </span>
        </div>
        <div className="video" data-video-id="l6ookTVHPO0" data-video-provider="youTube">
            <iframe allowFullScreen="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="U Content Creators" width="640" height="360"
                src="https://www.youtube.com/embed/l6ookTVHPO0?autoplay=1&amp;cc_load_policy=0&amp;controls=0&amp;disablekb=1&amp;enablejsapi=1&amp;fs=0&amp;iv_load_policy=3&amp;loop=1&amp;modestbranding=1&amp;origin=https%3A%2F%2Funity.com&amp;playlist=l6ookTVHPO0&amp;playsinline=1&amp;rel=0&amp;start=5&amp;mute=1&amp;widgetid=1"
                id="widget2">
            </iframe>
        </div>
    </>
}