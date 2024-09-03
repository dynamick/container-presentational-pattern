import { DogImages } from "./DogImages";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Component / Presentational pattern</h1>
      <h2>This is a simple Component/Presentational design pattern example.</h2>
      <p>See <a href="https://www.patterns.dev/react/presentational-container-pattern">Patterns.dev</a> for more infos.</p>
      <DogImages />
    </div>
  );
}
