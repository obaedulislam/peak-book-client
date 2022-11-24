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
    <footer className=" bg-accent py-12 w-[100%] md:px-0 px-3">
      <div className="max-w-[1250px] mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="foot-head text-center">
              <Link to="/" className="  flex items-center">
                <img
                  className="md:w-16 md:h-16 sm:w-12 sm:h-12 w-10 h-10"
                  src={logo}
                  alt="Peak Book"
                />
                <h1 className="uppercase lg:text-3xl md:text-2xl sm:text-xl text-lg font-extrabold text-primary ">
                  Peak <span className="text-white">Book</span>
                </h1>
              </Link>
            </div>
            <div className="my-4 ml-2">
              <div className="location flex  items-center text-gray-100 ">
                <MdLocationPin className="text-xl text-primary mr-2 "></MdLocationPin>
                <p>Katasur, Kaderabad Housing, Mohammadpur - Dhaka</p>
              </div>
              <div className="location flex  items-center text-gray-100 mt-2 ">
                <BsFillTelephoneInboundFill className=" text-primary mr-2"></BsFillTelephoneInboundFill>
                <p>Phone: +880-1788-446364</p>
              </div>
              <div className="location flex  items-center text-gray-100 mt-2 ">
                <BsFillEnvelopeFill className=" text-primary mr-2"></BsFillEnvelopeFill>
                <p>info@fitify.com</p>
              </div>
            </div>
          </div>
          {/* Footer Left End */}

          <div className="col-span-3 ">
            <div className="mt-4">
              <span className=" text-white text-2xl uppercase font-bold ">
                Category
              </span>
              <div className="all-category mt-8">
                <p className="mt-2">
                  <Link className="text-gray-200  font-semibold">
                    Non Fiction
                  </Link>
                </p>
                <p className="mt-2">
                  <Link className="text-gray-200  font-semibold">
                    Engineering
                  </Link>
                </p>
                <p className="mt-2">
                  <Link className="text-gray-200   font-semibold">
                    Medical Book
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="mt-4">
              <p className=" text-white text-right text-2xl uppercase font-bold ">
                Social Link
              </p>
              <div className="flex justify-end  mt-7">
                <ul className="flex">
                  <a
                    className="w-[43px] h-[43px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-3 flex justify-center"
                    href="https://www.facebook.com/obaedulislam.mohammad/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="text-lg text-lg "></FaFacebookF>
                  </a>
                  <a
                    className="w-[43px] h-[43px] mx-[5px] bg-white hover:bg-gray-200  text-primary   rounded-full pt-3 flex justify-center"
                    href="https://www.twitter.com/obaedulislam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-lg text-lg "></FaTwitter>
                  </a>
                  <a
                    className="w-[43px] h-[43px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-3 flex justify-center"
                    href="https://github.com/obaedulislam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-lg text-lg "></FaGithub>
                  </a>
                  <a
                    className="w-[43px] h-[43px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-3 flex justify-center"
                    href="https://www.linkedin.com/in/obaedulislam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="text-lg text-lg "></FaLinkedinIn>
                  </a>
                  <a
                    className="w-[43px] h-[43px] mx-[5px] bg-white hover:bg-gray-200 text-primary   rounded-full pt-3 flex justify-center"
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
        </div>
        {/*Footer Right Social Media Icon End */}

        <div className="mt-8">
          <p className="text-center mt-5 text-gray-200 ">
            Copyright &copy; 2022 | All Right Reserved by
            <a
              href="http://obaedulislam.com/"
              target="_blank"
              className="text-gray-200 hover:text-primary"
              rel="noopener noreferrer"
            >
              Obaedul Islam
            </a>
            |
            <Link className="text-gray-200 hover:text-primary">
              Privacy Policy
            </Link>
            |
            <Link className="text-gray-200 hover:text-primary  ">
              Terms & Conditions
            </Link>
          </p>
        </div>
        {/* Footer Bottom End */}
      </div>
    </footer>
  );
};

export default Footer;
