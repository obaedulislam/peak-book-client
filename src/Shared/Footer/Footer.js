import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneInboundFill, BsFillEnvelopeFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" bg-gray-100  w-[100%] md:px-0">
      <div className="md">
        <div className="max-w-[1250px] mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:py-12 py-8 lg:px-0 md:px-4 px-3">
          <div className=" sm:text-start text-center">
            <div className="foot-head text-center">
              <Link
                to="/"
                className="  flex items-center sm:justify-start justify-center"
              >
                <img
                  className="md:w-10 md:h-12 sm:w-8 sm:h-10 w-6 h-8"
                  src={logo}
                  alt="Peak Book"
                />
                <h1 className="ml-2 uppercase lg:text-2xl md:text-xl sm:text-lg text-md font-extrabold text-primary ">
                  Peak <span className="text-accent">Book</span>
                </h1>
              </Link>
            </div>
            <div>
              <p className="text-accent text-sm mt-3 mr-5">
                PeakBook gives you the best experience to purchase second hand
                book with a reasonable price. You can buy or sell any second
                hand book here.
              </p>
            </div>
          </div>
          {/* Footer Left End */}

          <div className=" sm:text-start text-center">
            <div className="mt-4">
              <span className=" text-primary text-xl tracking-tight font-specially uppercase font-bold ">
                Pages to visit
              </span>
              <div className="all-category mt-3">
                <p className="mt-2">
                  <Link
                    to="/"
                    className="text-accent text-sm hover:text-black  font-medium"
                  >
                    Home
                  </Link>
                </p>
                <p className="mt-2">
                  <Link
                    to="/blog"
                    className="text-accent text-sm hover:text-black  font-medium"
                  >
                    Blog
                  </Link>
                </p>
                <p className="mt-2">
                  <Link
                    to="/signup"
                    className="text-accent  text-sm hover:text-black  font-medium"
                  >
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* Page Navigation End */}

          <div className=" sm:text-start text-center">
            <div className="mt-4">
              <span className=" text-primary text-xl tracking-tight font-specially uppercase font-bold ">
                Category
              </span>
              <div className="all-category mt-3">
                <p className="mt-2">
                  <Link
                    to="/category/non-fiction"
                    className="text-accent text-sm hover:text-black  font-medium"
                  >
                    Non Fiction
                  </Link>
                </p>
                <p className="mt-2">
                  <Link
                    to="/category/engineering"
                    className="text-accent text-sm hover:text-black  font-medium"
                  >
                    Engineering
                  </Link>
                </p>
                <p className="mt-2">
                  <Link
                    to="/category/medical"
                    className="text-accent  text-sm hover:text-black  font-medium"
                  >
                    Medical Book
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* Category Navigation End */}

          <div className="sm:text-start text-center">
            <div className="mt-4">
              <span className=" text-primary text-xl tracking-tight font-specially uppercase font-bold ">
                Contact Us
              </span>
              <div className=" mt-3">
                <div className="my-4 ml-2">
                  <div className="location flex  items-center sm:justify-start justify-center text-accent text-sm ">
                    <MdLocationPin className="text-primary  text-lg mr-2 "></MdLocationPin>
                    <p> Mohammadpur - Dhaka-1207</p>
                  </div>
                  <div className="location flex  items-center  sm:justify-start justify-center  text-accent text-sm mt-2 ">
                    <BsFillTelephoneInboundFill className=" text-primary text-sm mr-2"></BsFillTelephoneInboundFill>
                    <p>Phone: +880-1788-446364</p>
                  </div>
                  <div className="location flex  items-center  sm:justify-start justify-center  text-accent text-sm mt-2 ">
                    <BsFillEnvelopeFill className=" text-primary text-sm mr-2"></BsFillEnvelopeFill>
                    <p>info@fitify.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Footer Right Social Media Icon End */}

        <div className=" py-5 bg-accent">
          <div className="max-w-[1250px] mx-auto grid md:grid-cols-2 grid-cols-1 md:px-0 px-3">
            <div className="flex items-center md:order-1 order-2 md:mt-0 mt-3">
              <p className="text-sm text-gray-200 md:text-start text-center">
                Copyright &copy; 2022 | All Right Reserved by
                <a
                  href="http://obaedulislam.com/"
                  target="_blank"
                  className="text-gray-200 hover:text-primary ml-1"
                  rel="noopener noreferrer"
                >
                  Obaedul Islam
                </a>
              </p>
            </div>
            <div className="flex md:justify-end justify-center md:order-2 order1">
              <ul className="flex ">
                <a
                  className="w-[30px] h-[30px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-1.5 flex justify-center"
                  href="https://www.facebook.com/obaedulislam.mohammad/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-lg text-lg "></FaFacebookF>
                </a>
                <a
                  className="w-[30px] h-[30px] mx-[5px] bg-white hover:bg-gray-200  text-primary   rounded-full pt-1.5 flex justify-center"
                  href="https://www.twitter.com/obaedulislam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-lg text-lg "></FaTwitter>
                </a>
                <a
                  className="w-[30px] h-[30px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-1.5 flex justify-center"
                  href="https://github.com/obaedulislam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg text-lg "></FaGithub>
                </a>
                <a
                  className="w-[30px] h-[30px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-1.5 flex justify-center"
                  href="https://www.linkedin.com/in/obaedulislam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-lg text-lg "></FaLinkedinIn>
                </a>
                <a
                  className="w-[30px] h-[30px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-1.5 flex justify-center"
                  href="https://www.instagram.com/obaedul_islam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-lg text-lg "></FaInstagram>
                </a>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Bottom End */}
      </div>
    </footer>
  );
};

export default Footer;
