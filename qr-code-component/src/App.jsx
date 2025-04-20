import { useRef, useState } from "react";
import "./App.css";
import QRCodeComponent from "./QRCodeComponent";
import Customizer from "./Customizer";
import html2canvas from "html2canvas";

function App() {
  const [url, setURL] = useState("https://en.wikipedia.org/wiki/QR_code");
  const [title, setTitle] = useState("What are QR Codes?");
  const [description, setDescription] = useState(
    "The QR code is a two-dimensional barcode used to store information, such as URLs, text, or other data. Read more by scanning this QR code!"
  );
  const [colorBG, setColorBG] = useState("#0099FF");
  const [colorFG, setColorFG] = useState("#FFFFFF");

  const qrCodeRef = useRef(null);

  const handleImageDownload = async (format) => {
    if (!qrCodeRef.current) return;

    const canvas = await html2canvas(qrCodeRef.current);
    const image = canvas.toDataURL(`image/${format}`);

    const link = document.createElement("a");
    link.href = image;
    link.download = `qr-code.${format}`;
    link.click();
  };

  return (
    <>
      <header>
        <h1 style={{ textAlign: "center" }}>QR Code Component Generator</h1>
      </header>
      <main className="main-content">
        <Customizer
          colorBG={colorBG}
          colorFG={colorFG}
          setURL={setURL}
          setTitle={setTitle}
          setDescription={setDescription}
          setColorBG={setColorBG}
          setColorFG={setColorFG}
        />
        <div ref={qrCodeRef} className="shadow">
          <QRCodeComponent
            url={url}
            colorBG={colorBG}
            colorFG={colorFG}
            title={title}
            description={description}
          />
        </div>
      </main>
      <nav style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <button onClick={() => handleImageDownload("png")}>
          Download Component as PNG
        </button>
        <button onClick={() => handleImageDownload("jpg")}>
          Download Component as JPG
        </button>
      </nav>
    </>
  );
}

export default App;
