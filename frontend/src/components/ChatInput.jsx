// import React from "react";
// import { Send, Paperclip, Smile } from "lucide-react";

const ChatFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 p-4 flex items-center space-x-3">
      <button className="text-gray-500 hover:text-gray-700">
        {/* <Paperclip size={24} /> */}
      </button>
      <button className="text-gray-500 hover:text-gray-700">
        {/* <Smile size={24} /> */}
      </button>
      <div className="flex-grow">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
        {/* <Send size={24} /> */}
      </button>
    </footer>
  );
};

export default ChatFooter;
