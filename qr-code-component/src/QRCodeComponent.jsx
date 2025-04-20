import { QRCodeSVG } from "qrcode.react";
import "./QRCodeComponent.css";

function QRCodeComponent({ url, colorBG, colorFG, title, description }) {
  return (
    <div className="qr-code-component">
      <div className="qr-code" style={{ backgroundColor: colorBG }}>
        <QRCodeSVG
          value={url}
          size={200}
          bgColor={colorBG}
          fgColor={colorFG}
          level="H"
        />
      </div>
      {title && <h2 className="line-break">{title}</h2>}
      {description && <p className="line-break">{description}</p>}
    </div>
  );
}

export default QRCodeComponent;
