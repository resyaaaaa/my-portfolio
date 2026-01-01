/** REUSABLE TASKBAR COMPONENT */
import startIcon from "../assets/taskbar/windows10_2.png";
import explorerIcon from "../assets/taskbar/file_explorer.png";

function Taskbar({ openApps, activeApp, onAppClick, onStartClick }) {
  return (
    <div className="taskbar">

      {/* Start + Explorer */}
      <div className="start-btn">
        <img src={startIcon} alt="Start" className="taskbar-img" onClick={onStartClick} />
      </div>

      {/* Open apps */}

      {openApps.map((app) => (
        <div
          key={app}
          className={`taskbar-item ${activeApp === app ? "active" : ""}`}
          onClick={() => onAppClick(app)}
        >
          <img src={explorerIcon} alt={app} />
        </div>
      ))}


      {/* Clock */}
      <div className="taskbar-clock">
        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,

        })}
      </div>
    </div>
  );
}

export default Taskbar;
