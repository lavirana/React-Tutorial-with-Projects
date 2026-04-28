import React from "react";
import human from "../assets/human.png";
import robot from "../assets/robot.png";
import human2 from "../assets/hum.png";

const ChatMessage = ({ message, sender }) => {
  //const message = props.message;
  //const sender = props.sender;

  /*
  if (sender === "robot") {
    return (
      <>
        <div className="chat-message">
          <img
            src={robot}
            alt=""
            width={50}
            style={{ borderRadius: "100px" }}
          />
          {message}
        </div>
      </>
    );
  }
*/

  return (
    <div className={`chat-message ${sender}`}>
      <img src={sender === "robot" ? robot : human2} alt={sender} width={40} />
      <p>{message}</p>
    </div>
    /* <>
      <div className="chat-message">
        {sender === "robot" && (
          <img
            src={robot}
            alt=""
            width={50}
            style={{ borderRadius: "100px" }}
          />
        )}
        {message}
        {sender === "user" && (
          <img
            src={human2}
            alt=""
            width={50}
            style={{ borderRadius: "100px" }}
          />
        )}
      </div>
    </> */
  );
};

export default ChatMessage;
