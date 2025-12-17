import { useState } from "react";

/** Components */
import DesktopIcon from "./components/DesktopIcon";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import StartExplorer from "./components/StartExplorer";
import Lockscreen from "./components/Lockscreen";
/** Icons */
import ProjectsIcon from "./assets/icons/1.png";
import SkillsIcon from "./assets/icons/4.png";
import EducationsIcon from "./assets/icons/6.png";
import GitHubIcon from "./assets/icons/github.png";

/** Pages */
import MyProjects from "./pages/MyProjects";
import MySkills from "./pages/MySkills";
import MyEducations from "./pages/MyEducations";
//====================================================================================
//====================================================================================

function App() {
  const [openApps, setOpenApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);

  const [startOpen, setStartOpen] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const openApp = (appName) => {
    if (!openApps.includes(appName)) {
      setOpenApps([...openApps, appName]);
    }
    setActiveApp(appName);
  };

  const closeApp = (appName) => {
    setOpenApps(openApps.filter(app => app !== appName));
    if (activeApp === appName) setActiveApp(null);
  };

  const toggleApp = (appName) => {
    if (activeApp === appName){
      setActiveApp(null);
    } else {
      setActiveApp(appName);
    }
  };

  return (
    <div className="desktop">
      {/* Desktop Icons */}
      <DesktopIcon
        label="Projects"
        icon={ProjectsIcon}
        onDoubleClick={() => openApp("Projects")}
      />
      <DesktopIcon
        label="Skills"
        icon={SkillsIcon}
        onDoubleClick={() => openApp("Skills")}
      />
      <DesktopIcon
        label="Educations"
        icon={EducationsIcon}
        onDoubleClick={() => openApp("Educations")}
      />
      <DesktopIcon
        label="GitHub"
        icon={GitHubIcon}
        onDoubleClick={() => window.open("https://github.com/resyaaaaa")}
      />

      {/* Open Windows */}
      {openApps.includes("Projects") && (
        <Window
          title="Projects"
          isActive={activeApp === "Projects"}
          onClose={() => closeApp("Projects")}
        >
          <MyProjects />
        </Window>
      )}

      {openApps.includes("Skills") && (
        <Window
          title="Skills"
          isActive={activeApp === "Skills"}
          onClose={() => closeApp("Skills")}
        >
          <MySkills />
        </Window>
      )}

      {openApps.includes("Educations") && (
        <Window
          title="Educations"
          isActive={activeApp === "Educations"}
          onClose={() => closeApp("Educations")}
        >
          <MyEducations />
        </Window>
      )}

      {startOpen && (
        <StartExplorer
        onOpenApp={(app) => {
          openApp(app);
          setStartOpen(false);
        }}
        onSleep={()=> {
          setIsSleeping(true);
          setStartOpen(false);
        }}
        onLock={()=> {
          setIsLocked(true);
          setStartOpen(false);
        }}
      />
      )}

      {isLocked && (
        <Lockscreen onUnlock={() => setIsLocked(false)}/>
      )}

      {/* Taskbar */}
      <Taskbar 
      openApps={openApps} 
      activeApp={activeApp} 
      onAppClick={toggleApp} 
      onStartClick={() => setStartOpen(!startOpen)}
      />
    </div>
  );
}

export default App;
