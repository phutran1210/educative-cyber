import React from "react"
import FacebookLogin from "react-facebook-login"
import { settings } from "../../configs/settings"

class FacebookLoginPage extends React.Component {
  responseFacebook = res => {
    // this.props.handleLoginFacebook(res)
    console.log(res)
  }

  render() {
    return (
      <FacebookLogin
        appId="464905814949590"
        autoLoad={false}
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="w-full mt-3 mb-4 p-3 rounded-lg font-semibold text-lg hover:bg-blue-900 bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white"
      />
    )
  }
}
export default FacebookLoginPage
