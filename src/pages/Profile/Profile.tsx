import React from "react"

interface Props {}

export const Profile = (props: Props) => {
  return (
    <div className="container bg-gray-200 m-auto">
      <h1 className="text-7xl text-center">Profile</h1>
      <div className="grid-cols-3"></div>
      <div className="grid-cols-9"></div>
    </div>
  )
}
