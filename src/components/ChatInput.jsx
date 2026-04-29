import React from "react";

const ChatInput = ({ chatMessages, setChatMessages }) => {
  const [inputText, setInputText] = React.useState("");
  function saveInputText(event) {
    setInputText(event.target.value);
  }
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter your message"
        onChange={saveInputText}
        value={inputText}
      />
      <button onClick={sendMessage}>Send Message</button>
    </>
  );
};

export default ChatInput;
