import React from "react"

interface SidebarNavProps { }

const SidebarNav = (props: SidebarNavProps) => {
  return (
    <div>
      <div className="min-h-screen flex flex-row bg-gray-100 fixed">
        <div className="flex flex-col w-24 pl-2 bg-white overflow-hidden">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-2xl text-center uppercase text-indigo-500 font-semibold" >Educative CyberSoft</h1>
          </div>
          <ul className="flex flex-col py-4">
            <li>
              <a href="#" className="flex flex-col items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home" /></span>
                <span className="text-sm font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music" /></span>
                <span className="text-sm font-medium">Music</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink" /></span>
                <span className="text-sm font-medium">Drink</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag" /></span>
                <span className="text-sm font-medium">Shopping</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat" /></span>
                <span className="text-sm font-medium">Chat</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user" /></span>
                <span className="text-sm font-medium">Profile</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell" /></span>
                <span className="text-sm font-medium">Notifications</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out" /></span>
                <span className="text-sm font-medium">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default SidebarNav
