import { Link } from "react-router-dom";
import chatLogo from "../assets/images/chat-logo.png";

const Header = () => {
  return (
    <header className="bg-amber-50 py-2 px-4 sm:px-6 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <div className="relative w-12 h-12">
          <img
            src={chatLogo}
            alt="chat logo"
            className="aspect-square w-full h-full"
          />
        </div>
        <h2 className="font-bold bg-gradient-to-r from-amber-400 to-amber-900 bg-clip-text text-transparent">
          Let&apos;s chat
        </h2>
      </div>
      <div>
        <Link
          to="/login"
          className="no-underline cursor-pointer bg-amber-400 rounded-md !text-amber-50 px-4 py-2 focus:ring-2 focus:ring-amber-200 transition-all duration-200 hover:shadow hover:shadow-amber-200 shadow-[0px_0px_5px] shadow-white"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
