import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import isUrl from "is-url";
import "./Customizer.css";

function Customizer({
  colorBG,
  colorFG,
  setURL,
  setTitle,
  setDescription,
  setColorBG,
  setColorFG,
}) {
  const [isURLEntered, setIsURLEntered] = useState(true);
  const [isValidURL, setIsValidURL] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsURLEntered(true);
    setIsValidURL(true);

    const formData = new FormData(e.target);

    let newURL = formData.get("url").toLowerCase();
    const newTitle = formData.get("title");
    const newDescription = formData.get("description");
    const newColorBG = formData.get("color-bg");
    const newColorFG = formData.get("color-fg");

    // Check if URL is entered
    if (!newURL) {
      setIsURLEntered(false);
      return;
    }

    // Add "https://"" if not entered
    if (!(newURL.startsWith("https://") || newURL.startsWith("http://"))) {
      newURL = "https://" + newURL;
    }

    // Check if valid URL
    if (!isUrl(newURL)) {
      setIsValidURL(false);
      return;
    }

    setURL(newURL);
    setTitle(newTitle);
    setDescription(newDescription);
    setColorBG(newColorBG);
    setColorFG(newColorFG);
  };

  return (
    <form action="#" onSubmit={handleSubmit} className="customizer">
      <div>
        <label htmlFor="url">
          <span style={{ color: "red" }}>*</span> URL:
        </label>
        <input
          type="text"
          name="url"
          style={{ borderColor: !isValidURL || !isURLEntered ? "red" : "gray" }}
        />
        {(!isURLEntered || !isValidURL) && (
          <span className="invalid">
            <FontAwesomeIcon icon={faTimesCircle} />
            {!isURLEntered ? "Enter a URL" : "Invalid URL"}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          rows={5}
          cols={50}
          style={{ resize: "none" }}
        />
      </div>
      <div>
        <label htmlFor="color-bg">Background Color:</label>
        <input type="color" name="color-bg" defaultValue={colorBG} />
      </div>
      <div>
        <label htmlFor="color-fg">Foreground Color:</label>
        <input type="color" name="color-fg" defaultValue={colorFG} />
      </div>
      <button type="submit">Generate Component</button>
    </form>
  );
}

export default Customizer;
