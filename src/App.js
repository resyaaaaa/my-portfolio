import { useState } from "react";
import DesktopIcon from "./components/DesktopIcon";
import MyProjects from "./pages/MyProjects";

import projectIcon from "./assets/icons/1.png";


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
    </div>
  );
}

export default App;
