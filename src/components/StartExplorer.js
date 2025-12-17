import folderIcon from "../assets/icons/folder.png";
import GitHubIcon from "../assets/icons/github.png";
function StartExplorer({ onOpenApp, onSleep, onLock }) {
    return (
        <div className="start-explorer">
            <div className="start-grid">
                <div onClick={() => onOpenApp("Projects")}>
                    <img src={folderIcon} />
                    <p>Projects</p>
                </div>
                <div onClick={() => onOpenApp("Skills")}>
                    <img src={folderIcon} />
                    <p>Skills</p>
                </div>
                <div onClick={() => onOpenApp("Educations")}>
                    <img src={folderIcon} />
                    <p>Educations</p>
                </div>
                <div onClick={() => window.open("https://github.com/resyaaaaa")}>
                    <img src={GitHubIcon} />
                    <p>GitHub</p>
                </div>

                {/**Divider */}
                <hr />

                {/** Start button */}
                <div className="start-actions">
                    <button onClick={onSleep} className="btn">Sleep</button>
                    <button onClick={onLock} className="btn">Lock</button>
                </div>

            </div>
        </div>
    );
}

export default StartExplorer;