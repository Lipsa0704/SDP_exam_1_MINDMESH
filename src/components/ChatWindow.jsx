import { useState } from "react";

function getReply(message) {
    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hey!!";
    }

    if (text.includes("How Are You?")) {
        return "Fine And How Are You??";
    }

    if (text.includes("I'm Good")) {
        return "That's Great.What are you doing today?";
    }

    if (text.includes("Nothing much,Studying")) {
        return "Wow , That's great";
    }

    if (text.includes("Ok bye")) {
        return "Good luck! Talk to you later";
    }

    return "Thinking.....";
}

const sendMessage=()=>{
 if (!input.trim()) return;
}



const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;


    setMessages((prev) => [
      ...prev,
      { id: Date.now(), user: "Me", text: userMessage },
    ]);

    setInput("");

    setTimeout(() => {
      const reply = getReply(userMessage);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, user: "Bot", text: reply },
      ]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-pink-200 flex flex-col items-center p-4">
      <h2 className="font-bold text-3xl mb-4">Chat Box</h2>

      <div className="w-full max-w-md h-[60vh] bg-white border rounded p-3 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`px-3 py-2 rounded max-w-[75%] text-sm ${
              msg.user === "Me"
                ? "self-end bg-green-200"
                : "self-start bg-gray-200"
            }`}
          >
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>

   
      <div className="w-full max-w-md flex gap-2 mt-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded px-3 py-2 focus:outline-none"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;

    