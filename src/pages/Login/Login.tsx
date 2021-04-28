import React, { useState } from "react"
import FacebookLoginPage from "../../components/FacebookLogin/FacebookLogin"
import AxiosServ from "../../services/axios.service"
import httpServ from "../../services/http.service"
import localStorageServ from "../../services/locaStorage.service"

interface Props {}

const Login = (props: Props) => {
  const [state, setState] = useState({
    userName: "",
    password: ""
  })
  const [credentials, setCredentials] = useState({
    facebookID: "",
    facebookEmail: "",
    email: ""
  })
  const [isShowEmailLogin, setIsShowEmailLogin] = useState(false)
  const [isShowNotification, setIsShowNotification] = useState(false)
  const [isShowPolicy, setIsShowPolicy] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    console.log("handleSubmit", state)
    if (state.userName === "admin" && state.password === "mozart")
      window.location.replace("/")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleChange")
    const { target } = event
    const { name, value } = target
    event.persist()
    setState({ ...state, [name]: value })
  }

  const handleLoginFacebook = value => {
    // const credentials = {
    //   facebookID: value.id,
    //   facebookEmail: value.email ? value.email : "",
    //   email: ""
    // }

    credentials.facebookID = value.id
    credentials.facebookEmail = value.email ? value.email : ""
    credentials.email = ""
    setCredentials({ ...credentials })
    // handleLogin()
  }
  // const handleLogin = () => {
  //   httpServ
  //     .loginUser(credentials)
  //     .then(res => {
  //       if (res.data?.authKey && res.data.isFirstTimeLogin) {
  //         localStorageServ.accessToken.set(res.data.authKey)
  //         delete res.data.authKey
  //         localStorageServ.userInfor.set(res.data)
  //         AxiosServ.getAxiosConfig(res.data.authKey)
  //         this.setState({ isShowPolicy: true })
  //       } else if (res.data?.authKey) {
  //         localStorageServ.accessToken.set(res.data.authKey)
  //         delete res.data.authKey
  //         localStorageServ.userInfor.set(res.data)
  //         AxiosServ.getAxiosConfig(res.data.authKey)

  //         window.location.assign("/lessons")
  //       }
  //     })
  //     .catch(err => {
  //       if (err && err.status && err.status === 400) {
  //         this.setState(
  //           {
  //             ...this.state,
  //             isShowEmailLogin: true,
  //             isShowNotification: true
  //           },
  //           () => {
  //             this.handleNotification()
  //           }
  //         )
  //       }
  //     })
  // }

  return (
    <div
      className="p-20 h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200"
      style={{
        background:
          "linear-gradient(189.16deg, rgb(144, 118, 231) 13.57%, rgb(67, 22, 219) 98.38%)"
      }}
    >
      <div className="content text-xl text-center text-white md:text-right">
        <h1 className="text-8xl text-blue-400 font-bold my-2">
          Educative CyberSoft
        </h1>
        <p>Make your dream come true</p>
      </div>
      <div className="relative container mx-auto flex flex-col items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-light-blue-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl w-96 m-auto -top-10"></div>
        <form
          className="relative shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg"
          onSubmit={e => {
            handleSubmit(e)
          }}
        >
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            onChange={e => {
              handleChange(e)
            }}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            onChange={e => {
              handleChange(e)
            }}
          />
          <button
            className="w-full mb-3 bg-gradient-to-r from-green-700 to-green-400 hover:from-pink-500 hover:to-orange-500 text-white p-3 rounded-lg font-semibold text-lg hover:bg-green-900 transition delay-75 "
            type="submit"
          >
            Login
          </button>
          <hr />
          <span className="text-center text-gray-500">or</span>
          <div>
            <FacebookLoginPage handleLoginFacebook={handleLoginFacebook} />
          </div>
        </form>
        <p className="text-center text-base my-4 w-80 text-white">
          <span className="font-semibold text-center">Lưu ý: </span>
          Tài khoản facebook của bạn phải là tài khoản có email khớp với email
          bạn đã đăng ký khóa học của trung tâm!
        </p>
      </div>
    </div>
  )
}

export default Login
