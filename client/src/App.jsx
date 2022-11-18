import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3002");

function App() {
  const [messages, setMessages] = useState([]);

  const [joinedRoom, setJoinedRoom] = useState("");
  const [room, setRoom] = useState("");

  socket.on("connect", () => {
    setMessages([...messages, `You connected with id: ${socket.id}`]);
  });

  socket.on("receive-message", (message) => {
    setMessages([...messages, message]);
  });

  const [chat, setChat] = useState("");

  function handleSubmit() {
    setMessages([...messages, chat]);
    setChat("");
    socket.emit("send-message", chat, joinedRoom);
  }

  function handleRoom() {
    setJoinedRoom(room);
    setRoom("");
    socket.emit("join-room", room, (message) => {
      setMessages([...messages, message]);
    });
  }

  return (
    <div>
      <h1>Room: {joinedRoom}</h1>
      <div className="bg-slate-200 p-4 w-full h-96 overflow-y-scroll">
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
      <div className="bg-slate-700 p-4 w-ful">
        <span className="text-white">Message: </span>
        <input
          className="w-80"
          type="text"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <button
          className="bg-gray-500 w-36 text-white ml-2"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>

      <div className="bg-slate-700 p-4 w-full">
        <span className="text-white">Room: </span>
        <input
          className="w-80"
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button
          className="bg-gray-500 w-36 text-white ml-2"
          onClick={handleRoom}
        >
          Join
        </button>
      </div>
    </div>
  );
}

export default App;
