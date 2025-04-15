import { useState } from "react";
import "./App.css";
import toastNotifcations from "./toast.json";
import Toast from "./Toast";

function App() {
  const [notifications, setNotifications] = useState([]);
  const toastNotifcationExamples = toastNotifcations.toasts;

  const createNotifcation = () => {
    const randomIndex = Math.floor(
      Math.random() * toastNotifcationExamples.length
    );
    const newToast = {
      id: Date.now(),
      type: toastNotifcationExamples[randomIndex]["type"],
      message: toastNotifcationExamples[randomIndex]["message"],
    };
    setNotifications((prev) => [...prev, newToast]);

    // Remove the notification after 5 seconds
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((toast) => toast.id !== newToast.id)
      );
    }, 5000);
  };

  return (
    <main className="main-content">
      <button onClick={createNotifcation} className="notification-btn">
        Show Notifcation
      </button>
      <div className="toast-container">
        {notifications.map((toast) => (
          <Toast key={toast.id} type={toast.type} message={toast.message} />
        ))}
      </div>
    </main>
  );
}

export default App;
