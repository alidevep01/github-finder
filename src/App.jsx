import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="Github Finder" />
        <main>
          <Routes>
            <Route path="/" />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
