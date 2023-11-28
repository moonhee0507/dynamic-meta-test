import { BrowserRouter, Route, Routes } from "react-router-dom";
import VerifPage from "./VerifPage";

function App() {
  return (
    <BrowserRouter basename="/vrf">
      <Routes>
        <Route path="/qr/:contractAddress/:nftId" element={<VerifPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
