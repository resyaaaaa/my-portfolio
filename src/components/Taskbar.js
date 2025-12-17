/** REUSABLE TASKBAR COMPONENTS */
import taskbarIcon from "../assets/taskbar/windows10_32.png"

function Taskbar(){
    return(
        <div className="taskbar">
            {/** Start logo */}
            <div className="taskbar-item">
                <img src={taskbarIcon} alt="taskbar" className="taskbar-img" />
            </div>

            <div className="taskbar-item">Projects</div>
            <div className="taskbar-item">Skills</div>

            <div className="taskbar-clock">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}
            </div>

        </div>

    );
}

export default Taskbar;