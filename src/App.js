import { useState } from "react";

/** Components */
import DesktopIcon from "./components/DesktopIcon";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import StartExplorer from "./components/StartExplorer";
import Lockscreen from "./components/Lockscreen";
/** Icons */
import ProjectsIcon from "./assets/icons/folder.png";
import SkillsIcon from "./assets/icons/folder.png";
import EducationsIcon from "./assets/icons/folder.png";
import GitHubIcon from "./assets/icons/github2.png";
import CanvaIcon from "./assets/icons/canva.png";
import LinkedinIcon from "./assets/icons/linkedin.png";
import ContactIcon from "./assets/icons/contact.png";

/** Pages */
import MyProjects from "./pages/MyProjects";
import MySkills from "./pages/MySkills";
import MyEducations from "./pages/MyEducations";
import Sleep from "./pages/Sleep";
import Contacts from "./pages/ContactMe";
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
      <DesktopIcon
        label="Linkedin"
        icon={LinkedinIcon}
        onDoubleClick={() => window.open("https://www.linkedin.com/in/resyalizatul-omar-83a9a029a/")}
      />
      <DesktopIcon
        label="Canva"
        icon={CanvaIcon}
        onDoubleClick={() => window.open("https://www.canva.com/design/DAG9C6VlHUQ/xhLKoLNeUiK33ZhDG3HTvA/edit?utm_content=DAG9C6VlHUQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton")}
      />
      <DesktopIcon
        label="Contact"
        icon={ContactIcon}
        onDoubleClick={() => openApp("Contacts")}
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

      {openApps.includes("Contacts") && (
        <Window
          title="Contacts"
          isActive={activeApp === "Contacts"}
          onClose={() => closeApp("Contacts")}
        >
          <Contacts />
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
      
      {isSleeping && (
        <Sleep onWake={() => setIsSleeping(false)}/>
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
