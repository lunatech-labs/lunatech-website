import PropTypes from "prop-types";
import "./Toast.scss";
import { arrowSend, closeIcon } from "@/assets";

const Toast = ({ message, type, onClose }: { message: string, type: string, onClose: () => void }) => {
const iconMap: { [key: string]: JSX.Element } = {
    success: <img src={arrowSend} alt="" />,
    failure: <img src={closeIcon} alt="" />,
};

const toastIcon = iconMap[type] || null;

  return (
    <div className={`toast toast--${type}`} role="alert">
      <div className="toast__message">
        {toastIcon && (
          <div className="thumbIcon icon--lg icon--thumb">{toastIcon}</div>
        )}
        <p>{message}</p>
      </div>
      <button className="toast__close-btn" onClick={onClose}>
        <span className="closeIcon">
          <img src={closeIcon} alt="" />
        </span>
      </button>
    </div>
  );
};

Toast.defaultProps = {
  type: "success",
  message: "Add a meaningful toast message here.",
};

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;