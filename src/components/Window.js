import closeIcon from "../assets/icons/close.png";

function Window({ title, children, isActive, onClose }) {
  return (
    <div
      className={`window ${isActive ? "active" : ""}`}
      style={{ zIndex: isActive ? 10 : 5 }}
    >
      <div className="window-header">
        <span>{title}</span>
        <button className="close-btn" onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </button>
      </div>

      <div className="window-body">{children}</div>
    </div>
  );
}

export default Window;
