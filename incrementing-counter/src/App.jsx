import "./App.css";
import CounterContainer from "./CounterContainer";
import platformData from "./platformData.json";

function App() {
  const data = platformData.data;

  return (
    <main className="main-content">
      {data.map((platform) => (
        <CounterContainer
          key={platform.platformName}
          platform={platform.platformName}
          number={platform.number}
          label={`${platform.platformName} ${platform.followersName}`}
        />
      ))}
    </main>
  );
}

export default App;
