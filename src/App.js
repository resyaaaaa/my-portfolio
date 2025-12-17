import { useState } from "react";
import DesktopIcon from "./components/DesktopIcon";
import MyProjects from "./pages/MyProjects";
import Taskbar from "./components/Taskbar";

import projectIcon from "./assets/icons/4.png";


function App() {
  const [openWindow, setOpenWindow] = useState(false);
  return (
    <div className="desktop">
      <DesktopIcon
        label="Projects"
        icon={projectIcon}
        onClick={() => setOpenWindow(true)}
      />

      {openWindow && (
        <MyProjects onClose={() => setOpenWindow(false)}
        />
      )}

      {/** Taskbar */}
      <Taskbar />
    </div>
  );
}

export default App;
