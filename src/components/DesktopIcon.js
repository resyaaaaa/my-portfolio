/** SHOW FOLDER ICON WITH LABEL UNDER IT */
function DesktopIcon({ label, icon, onClick }) {
    return (
        <div className="desktop-icon" onClick={onClick}>
            <img src={icon} alt={label} className="icon-img" />
            <p>{label}</p></div>
    );
}

export default DesktopIcon;