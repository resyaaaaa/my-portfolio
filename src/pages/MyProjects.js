import FolderIcon from "../components/FolderIcon";
import fileIcon from "../assets/icons/folder.png";

function MyProjects() {
  return (
    <div className="folder-grid">
      {/* Each folder in the Projects window */}
      <FolderIcon
        title="echoeyes"
        subtitle="A mobile-based object Detection and Recognition System for visually impaired users with text-to-speech using YOLOv8n " 
        icon={fileIcon}
        onClick={() => alert("Open echoeyes App")}
      />

      <FolderIcon
        title="Workshop Management System"
        subtitle="A mobile-based workshop management system to handle workshop owner and foreman schedules, payroll and inventory management"
        icon={fileIcon}
        onClick={() => alert("Open WMS App")}
      />

      <FolderIcon
        title="Food Journal Blog System"
        subtitle="A web-based blog system built for foodie enthusiasms to explore new food recipes and share their culinary experiences"
        icon={fileIcon}
        onClick={() => alert("Open Food Journal Blog System")}
      />
    </div>
  );
}

export default MyProjects;
