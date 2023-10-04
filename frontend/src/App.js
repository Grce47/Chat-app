import { Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/chats" component={ChatPage} exact />
    </div>
  );
}

export default App;
