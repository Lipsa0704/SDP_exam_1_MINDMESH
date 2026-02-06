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
    return (
        <>
            <div className="w-screen h-screen bg-pink-200 ">
                <h2 className="text-center font-bold text-4xl ">Chat Box</h2>
                <div className="w-[50%] h-[60%] border-2 ml-100 mt-30">

                </div>
            </div>
        </>
    )
}

export default ChatWindow;
