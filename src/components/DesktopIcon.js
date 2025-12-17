/** SHOW FOLDER ICON WITH LABEL UNDER IT */
function DesktopIcon({ title, icon, onDoubleClick }) {
    return (
        <div className="desktop-icon" onDoubleClick={onDoubleClick}>
            <img src={icon} alt={title} className="icon-img" />
            <p>{title}</p></div>
    );
}

export default DesktopIcon;