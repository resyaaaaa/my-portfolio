import folderIcon from "../assets/icons/6.png";

function MyProjects({ onClose }) {
    return (
        <div className="window">
            {/** window top bar */}
            <div className="window-header">
                <span>Projects</span>

                {/** close button */}
                <img src="{closeIcon}" alt="close" className="close-btn" onClick={onClose}
                />

            </div>

            {/**window content */}
            <div className="window-body">

                {/** Each folder in project's window */}
                <div className="folder-img">
                    <img src={folderIcon} alt="folder" />
                    <p>folder_1</p>
                </div>

                <div className="folder-img">
                    <img src={folderIcon} alt="folder" />
                    <p>folder_2</p>

                    <div className="folder-img">
                        <img src={folderIcon} alt="folder" />
                        <p>folder_3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;