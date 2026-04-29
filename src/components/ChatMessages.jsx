import ChatMessage from "./ChatMessage";

const ChatMessages = ({ chatMessages }) => {
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
