import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_{|}~";

    let characterSet = "";

    if (includeUppercase) characterSet += uppercase;
    if (includeLowercase) characterSet += lowerCase;
    if (includeNumbers) characterSet += numbers;
    if (includeSymbols) characterSet += symbols;

    if (!characterSet) setPassword("");

    let password = "";
    for (let i = 0; i < length; i++) {
      password += characterSet.charAt(
        Math.floor(Math.random() * characterSet.length)
      );
    }

    setPassword(password);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => alert("Password has been copied to your clipbard."))
      .catch((err) => alert(`ERROR: ${err}`));
  };

  return (
    <main className="main-content">
      <h1>Password Generator</h1>
      <div className="password-container">
        <span className="generated-password">{password}</span>
        <button className="copy" onClick={handleCopy}>
          <img src="src/assets/clipboard.svg" />
        </button>
      </div>

      <form className="password-settings" onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="length">Password Length</label>
          <input
            type="number"
            name="length"
            id="length"
            defaultValue={20}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="form-input">
          <label htmlFor="uppercase">Include uppercase letters</label>
          <input
            type="checkbox"
            name="uppercase"
            id="uppercase"
            defaultChecked={true}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
        </div>

        <div className="form-input">
          <label htmlFor="lowercase">Include lowercase letters</label>
          <input
            type="checkbox"
            name="lowercase"
            id="lowercase"
            defaultChecked={true}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
        </div>

        <div className="form-input">
          <label htmlFor="numbers">Include numbers</label>
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            defaultChecked={true}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </div>

        <div className="form-input">
          <label htmlFor="symbols">Include synbols</label>
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            defaultChecked={true}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        </div>

        <input type="submit" value="Generate Password" />
      </form>
    </main>
  );
}

export default App;
