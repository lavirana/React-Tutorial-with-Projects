import { useState } from "react";
import "./App.css";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";

function App() {
  const chatMessages = [
    {
      message: "hello chatbot",
      sender: "user",
    },
    {
      message: "hello! how can i help you",
      sender: "robot",
    },
    {
      message: "what time is it?",
      sender: "user",
    },
    {
      message: "its 3:00 pm",
      sender: "robot",
    },
  ];

  return (
    <div className="chat-app">
      <div className="messages-area">
        {chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
            />
          );
        })}
      </div>

      <div className="input-area">
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
