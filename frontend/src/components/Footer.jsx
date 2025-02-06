import { Link } from "react-router-dom";
import {
  MapPin,
  InstagramIcon,
  FacebookIcon,
  TwitchIcon,
  LinkedinIcon,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-6 bg-amber-900">
      <div className="container border-t border-solid border-amber-100 !pt-6 !px-2">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-lg text-amber-100">Contact Us</h3>
            <div className="flex flex-col gap-y-2">
              <address className="flex items-center text-amber-100">
                <MapPin className="text-amber-100 mr-1 w-5 h-5" />
                B26 California, <span className="ml-[2px]">USA</span>
              </address>
              <div className="flex items-center">
                <Mail className="mr-1.5 text-amber-100 w-5 h-5" />
                <p className="text-amber-100">madan.sharma281572@gmail.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-1 text-amber-100 w-5 h-5" />
                <p className="text-amber-100">+916397023806</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-lg text-amber-100">Social Handles</h3>
            <div className="flex gap-x-4 items-center">
              <Link
                to="#"
                className="rounded-full border-amber-100 border border-solid p-2 group hover:border-amber-300 cursor-pointer transition-all duration-300"
              >
                <FacebookIcon className="text-amber-100 group-hover:text-amber-300 transition-all duration-300" />
              </Link>
              <Link
                to="#"
                className="rounded-full border-amber-100 border border-solid p-2 group hover:border-amber-300 cursor-pointer transition-all duration-300"
              >
                <InstagramIcon className="text-amber-100 group-hover:text-amber-300 transition-all duration-300" />
              </Link>
              <Link
                to="#"
                className="rounded-full border-amber-100 border border-solid p-2 group hover:border-amber-300 cursor-pointer transition-all duration-300"
              >
                <TwitchIcon className="text-amber-100 group-hover:text-amber-300 transition-all duration-300" />
              </Link>
              <Link
                to="#"
                className="rounded-full border-amber-100 border border-solid p-2 group hover:border-amber-300 cursor-pointer transition-all duration-300"
              >
                <LinkedinIcon className="text-amber-100 group-hover:text-amber-300 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-amber-100 flex items-center justify-between pt-3 pb-4 border-t border-amber-200 border-solid mt-8 px-2">
          <p className="font-medium">
            ©2025 Let&apos;s chat. All rights reserved.
          </p>
          <div className="flex items-center gap-x-3">
            <Link
              to="#"
              className="font-normal text-amber-100 hover:text-amber-200 transition-all duration-300 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="font-normal text-amber-100 hover:text-amber-200 transition-all duration-300 hover:underline"
            >
              Terms and conditions
            </Link>
            <Link
              to="#"
              className="font-normal text-amber-100 hover:text-amber-200 transition-all duration-300 hover:underline"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
