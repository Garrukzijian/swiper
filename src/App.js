import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import Homepage from "./pages/homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
