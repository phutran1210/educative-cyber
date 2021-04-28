import AxiosServ from "./axios.service"

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() {}

  loginUser(data) {
    const uri = "user/login"
    return AxiosServ.postMethod(uri, data)
  }
}

const httpServ = new HttpRequestService()

export default httpServ
