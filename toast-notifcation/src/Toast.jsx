import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faExclamationCircle,
  faInfoCircle,
  faTimesCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Toast.css";
import toastColors from "./toast.json";
import { useState } from "react";

function Toast({ type, message }) {
  const [visible, setVisible] = useState(true);

  const toastColor = toastColors.colors;

  if (!visible) return null;

  return (
    <div className="toast">
      <FontAwesomeIcon
        icon={
          type === "Success"
            ? faCircleCheck
            : type === "Warning"
            ? faExclamationCircle
            : type === "Info"
            ? faInfoCircle
            : faTimesCircle
        }
        style={{ color: toastColor[type], fontSize: "1.5rem" }}
      />
      <span>
        <b>{type}</b>: {message}
      </span>
      <div className="close-btn">
        <button onClick={() => setVisible(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}

export default Toast;
