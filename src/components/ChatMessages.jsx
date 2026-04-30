import React from "react";
import ChatMessage from "./ChatMessage";

const ChatMessages = ({ chatMessages }) => {
  React.useEffect(() => {
    const messagesArea = document.querySelector(".messages-area");
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }, [chatMessages]);
  return (
    <>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      ))}
    </>
  );
};

export default ChatMessages;
