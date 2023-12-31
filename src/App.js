import './App.css';
import ChatRoom from "./components/Chat/ChatRoom";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatResultModal from "./components/Chat/ChatResultModal";
import Waiting from "./components/Home/Waiting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/result" element={<ChatResultModal />} />
        <Route path="/waiting" element={<Waiting />} />
      </Routes>
    </Router>
  );
}

export default App;
