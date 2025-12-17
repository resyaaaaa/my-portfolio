/** SHOW FOLDER ICON WITH LABEL UNDER IT */
function FolderIcon({ title, subtitle, icon, onDoubleClick }) {
    return (
        <div className="folder-icon" onDoubleClick={onDoubleClick}>
            <img src={icon} alt={title} className="folder-img" />
            <div className="folder-text">
                <strong>{title}</strong>
                {subtitle && <p>{subtitle}</p>}
            </div>
            </div>      
    );
}

export default FolderIcon;