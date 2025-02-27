import { Send } from "lucide-react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const ChatPage = () => {
  const socketRef = useRef(null);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (!socketRef.current) return;
    socketRef.current.send(inputMessage);
    setInputMessage("");
  };

  useEffect(() => {
    if (!socketRef.current) {
      const socket = new WebSocket("ws://localhost:8080/chat");

      socket.onmessage = (event) => {
        console.log(event.data);
        setMessages((preValue) => [...preValue, JSON.parse(event.data)]);
      };

      socket.onerror = (error) => {
        console.log(error);
        setMessages((preValue) => [
          ...preValue,
          "Facing some issue, restart your chat",
        ]);
        socket.close();
      };

      socketRef.current = socket;
    }

    return () => {
      socketRef.current && socketRef.current.close();
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="min-w-2xs max-w-lg sm:w-lg lg:w-2xl xl:w-3xl rounded-md bg-white shadow-[0px_0px_4px] shadow-amber-200 mt-10">
        <div className="px-4 py-2 border-b border-b-amber-300">
          <h1>Chat</h1>
        </div>
        <div className="w-full bg-amber-50 flex-col-reverse flex gap-y-1 sm:p-4 p-2 overflow-y-auto h-[420px]">
          <div className="flex flex-col">
            {messages.map((message) =>
              message.type === "sender" ? (
                <div
                  className="max-w-[80%] ml-auto text-right"
                  key={message.type + message.message}
                >
                  <p className="text-right text-amber-800 w-fit ml-auto bg-amber-100 py-1 px-2 rounded shadow-[0px_0px_1px] shadow-amber-200">
                    {message.message}
                  </p>
                </div>
              ) : (
                <div
                  className="max-w-[80%] mr-auto"
                  key={message.type + message.message}
                >
                  <p className="text-left bg-white py-1 px-2 w-fit rounded relative text-amber-800 shadow-[0px_0px_2px] shadow-amber-200">
                    {message.message}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="bg-white border-t border-t-amber-300 rounded-b-md overflow-hidden">
          <form onSubmit={sendMessage} className="flex justify-between  w-full">
            <input
              type="text"
              value={inputMessage}
              onChange={(event) => setInputMessage(event.target.value)}
              placeholder="type message..."
              className="outline-none border-none py-3 px-2 sm:px-4 flex-1 placeholder:text-amber-400 text-amber-800"
            />
            <button
              className="bg-amber-500 py-3 px-4 font-medium cursor-pointer text-amber-50 hover:bg-amber-400 transition-colors"
              onClick={sendMessage}
            >
              <Send />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
