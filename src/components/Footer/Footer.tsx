import React from "react"
import { FacebookFilled, YoutubeFilled, MailOutlined } from "@ant-design/icons"

interface Props {}

export const Footer = (props: Props) => {
  return (
    <>
      <footer
        className="pt-10 sm:mt-10 pt-10"
        style={{
          background:
            "linear-gradient(189.16deg, rgb(144, 118, 231) 13.57%, rgb(67, 22, 219) 98.38%)"
        }}
      >
        <div className="max-w-7xl m-auto text-gray-800 flex flex-wrap justify-left">
          <div className="p-5 w-1/2 sm:w-6/12 md:w-6/12 text-gray-300">
            <img
              width={250}
              height={50}
              src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg"
              alt="logo"
            />
            <p className="mt-5">
              Educative CyberSoft is an online platform that helps users to
              learn, practice coding skills and join the online coding contests.
            </p>
          </div>
          <div className="p-5 w-1/2 sm:w-2/12 md:w-2/12">
            <p className="text-xs uppercase text-gray-400 font-medium mb-6">
              LINKS
            </p>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Learning
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Training
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Fights
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Game
            </a>
          </div>
          <div className="p-5 w-1/2 sm:w-2/12 md:w-2/12">
            <p className="text-xs uppercase text-gray-400 font-medium mb-6">
              INFORMATION
            </p>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              About Us
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Terms of Use
            </a>
          </div>
          <div className="p-5 w-1/2 sm:w-2/12 md:w-2/12">
            <p className="text-xs uppercase text-gray-400 font-medium mb-6">
              HELP
            </p>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Help
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Discussion
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Contact us
            </a>
          </div>
        </div>
        <div
          className="flex pb-5 px-3 m-auto pt-5
      border-t border-gray-500 text-gray-400 text-sm 
      flex-col md:flex-row max-w-6xl"
        >
          <div className="mt-2">
            © Bản quyền CyberSoft 2017 - 2021 - Empower by{" "}
            <a
              href="https://cybersoft.edu.vn"
              target="_blank"
              className="font-bold text-yellow-300 hover:text-white"
            >
              CyberSoft
            </a>
          </div>
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex text-base">
            <a href="#" className="w-6 mx-1" title="Facebook" target="_blank">
              <FacebookFilled />
            </a>
            <a href="#" className="w-6 mx-1" title="Youtube" target="_blank">
              <YoutubeFilled />
            </a>
            <a href="#" className="w-6 mx-1" title="Email" target="_blank">
              <MailOutlined />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
