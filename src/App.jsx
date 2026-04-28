import { useState } from "react";
import "./App.css";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";

function App() {
  return (
    <div className="chat-app">
      <div className="messages-area">
        <ChatMessage message="Hello Chatbot" sender="user" />
        <ChatMessage message="Hello! How can i help you" sender="robot" />
        <ChatMessage message="What time is it?" sender="user" />
        <ChatMessage message="its 3:00 pm" sender="robot" />
      </div>

      <div className="input-area">
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
