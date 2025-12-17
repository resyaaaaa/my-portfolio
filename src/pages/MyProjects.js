import folderIcon from "../assets/icons/6.png";
import closeIcon from "../assets/icons/close.png";

function MyProjects({ onClose }) {
    return (
        <div className="window">
            {/** window top bar */}
            <div className="window-header">
                <span>Projects</span>

                {/** close button */}
                <img src={closeIcon} alt="close" className="close-btn" onClick={onClose}
                />

            </div>

            {/**window content */}
            <div className="window-body">

                {/** Each folder in project's window */}
                <div className="folder">
                    <img src={folderIcon} alt="folder" className="folder-img" />
                    Project1
                </div>

                <div className="folder">
                    <img src={folderIcon} alt="folder" className="folder-img" />
                    Project2
                </div>


                <div className="folder">
                    <img src={folderIcon} alt="folder" className="folder-img" />
                    Project3
                </div>

            </div>
        </div>
    );
}

export default MyProjects;