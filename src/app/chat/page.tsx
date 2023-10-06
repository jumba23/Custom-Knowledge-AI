import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, type: "user", content: "Hello" },
    { id: 2, type: "bot", content: "Hi there!" },
  ]);

  const handleSendMessage = () => {
    // Your message sending logic here.
    // For example, adding a new message to the 'messages' state.
    setMessages([
      ...messages,
      { id: messages.length + 1, type: "user", content: "New Message" },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto">
        <div className="overflow-y-auto h-60">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`my-2 ${
                msg.type === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block rounded-lg px-3 py-2 ${
                  msg.type === "user"
                    ? "bg-blue-400 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.content}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            className="p-2 w-full border rounded-md"
            placeholder="Type your message"
          />
          <button
            onClick={handleSendMessage}
            className="mt-2 bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
