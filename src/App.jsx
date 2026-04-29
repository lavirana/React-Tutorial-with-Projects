import React, { useState } from "react";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import "./App.css";

const App = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "hello! how can i help you",
      sender: "robot",
      id: "id2",
    },
  ]);

  return (
    <div className="chat-app">
      <div className="messages-area">
        <ChatMessages chatMessages={chatMessages} />
      </div>

      <div className="input-area">
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </div>
  );
};

export default App;
