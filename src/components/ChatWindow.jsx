import { useEffect, useRef, useState } from "react";

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

const ChatWindow = () => {
const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
    return (
        <>
            <div className="w-screen h-screen bg-pink-200 mt-0">
                <h2 className="text-center font-bold text-4xl ">Chat Box</h2>
                <div className="w-[50%] h-[60%] border-2 ml-100 mt-30 rounded">
                
                </div>
                 <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded px-3 py-2 ml-100 mt-2 "
        />
        <button className="rounded h-10 w-20 bg-blue-600 border-2 ml-5" >Send</button>
            </div>
        </>
    )
}

export default ChatWindow;
