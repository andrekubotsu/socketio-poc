import { useState } from "react";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:3002");

  const [messages, setMessages] = useState([
    "Testes1",
    "asgasdfasdfasdf",
    "o390jk203udjdjj",
  ]);

  const [chat, setChat] = useState("");

  function handleSubmit(event) {
    setMessages([...messages, chat]);
    setChat("");
  }

  return (
    <div>
      <div className="bg-slate-200 p-4 w-full h-96 overflow-y-scroll">
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
      <div className="bg-slate-700 p-4 w-full">
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
    </div>
  );
}

export default App;
