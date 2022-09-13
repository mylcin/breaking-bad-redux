import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CharacterDetail from "./pages/CharacterDetail";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
import EpisodeDetail from "./pages/EpisodeDetail";
import RandomQuote from "./pages/RandomQuote";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:char_id" element={<CharacterDetail />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:episode_id" element={<EpisodeDetail />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/quote/random" element={<RandomQuote />} />
      </Routes>
    </div>
  );
}

export default App;
