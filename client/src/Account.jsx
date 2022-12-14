export default function Account(props) {
    if (props.logged && props.user) {
        return <>
            <div className="accountContainer">
                <span>{props.user.name}</span>
                <img src={props.user.profilePicture ? `api/file/id/${props.user.profilePicture}` : '/images/profile-pic-placeholder.webp'} alt="avatar" />
                <button type="button" onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('email');
                    props.setLogged(false);
                }}>Sair</button>
                <span>Posts: {props.user.posts}</span>
                <span>Views: {props.user.views}</span>
            </div>
        </>
    } else {
        return <>
            <button className="header-mid-container-button"
                onClick={() => props.setModal(1)}>Entrar</button>
            <button className="header-mid-container-button"
                onClick={() => props.setModal(2)}>Registrar</button>
            <div className="header-grey-buttons">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                            fill="#757575"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
                            fill="#757575"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                            fill="#757575"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                </button>
            </div>
        </>
    }
}