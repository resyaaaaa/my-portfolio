import profileIcon from "../assets/icons/profile_uwu.png"

function Lockscreen({onUnlock}){
    return(
        <div className="lock-screen">
            <div className="lock-card">
                <img src={profileIcon}
                alt="profile"
                className="lock-avatar"/>
                <h2 className="lock-name">rubirubiresa</h2>
                <button className="lock-btn" onClick={onUnlock}>
                    Login
                </button>
            </div>
        </div>
    );
}
export default Lockscreen;