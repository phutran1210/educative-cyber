import React, { SetStateAction, useEffect, useState } from "react"
import user from "../../assets/img/1455555011_users-10_icon-icons.com_53271.png"
import { createPopper } from "@popperjs/core"

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    })
    setDropdownPopoverShow(true)
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }
  // end dropdown props
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDropdownPopoverShow(false)
  //   }, 500)
  // }, [dropdownPopoverShow])

  return (
    <>
      <div className="bg-gray-200">
        <nav
          className="w-full flex bg-blue-500 lg:px-8 px-4 py-1 text-white items-center relative justify-between md:justify-start"
          style={{
            background:
              "linear-gradient(189.16deg, rgb(144, 118, 231) 13.57%, rgb(67, 22, 219) 98.38%)"
          }}
        >
          <div className="mr-auto md:hidden block">
            <button className="p-2 text-gray-300 focus:outline-none focus:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            </button>
          </div>
          <div className="flex text-xl font-bold tracking-wider space-x-2 md:mx-0 mx-auto">
            <img
              width={150}
              height={50}
              src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg"
              alt="logo"
            />
          </div>
          <ul className="text-gray-300 flex md:space-x-2 p-2 md:px-0 md:space-y-0 space-y-1 md:relative absolute top-full flex-col md:flex-row left-0 right-0 m-auto">
            <li>
              <a
                href="#"
                className="font-semibold px-4 py-2 focus:bg-blue-400 hover:bg-blue-400 rounded-lg block"
              >
                Learning
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold px-4 py-2 focus:bg-blue-400 hover:bg-blue-400 hover:text-white rounded-lg block"
              >
                Training
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold px-4 py-2 focus:bg-blue-400 hover:bg-blue-400 hover:text-white rounded-lg block"
              >
                Challenge
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold px-4 py-2 focus:bg-blue-400 hover:bg-blue-400 hover:text-white rounded-lg block"
              >
                Evaluating
              </a>
            </li>
          </ul>
          <div className="ml-auto flex space-x-2 items-center">
            <div className="flex items-center relative space-y-1">
              <button
                className="rounded-full overflow-hidden focus:ring-2 focus:ring-white focus:outline-none ring-white ring-2 m-auto"
                type="button"
                onClick={() => {
                  dropdownPopoverShow
                    ? closeDropdownPopover()
                    : openDropdownPopover()
                }}
              >
                <img className=" w-8 h-8" src={user} />
              </button>
              <div className={dropdownPopoverShow ? "block " : "hidden "}>
                <ul className="absolute rounded-lg shadow-xl overflow-hidden top-full right-0 bg-white rounded text-gray-700 w-48 flex flex-col">
                  <li>
                    <a
                      href="/#/profile"
                      className="w-full block px-4 py-2 hover:bg-gray-100"
                    >
                      Your Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#/login"
                      className="w-full block px-4 py-2 hover:bg-gray-100"
                    >
                      Log out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Navbar
