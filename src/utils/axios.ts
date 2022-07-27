import Axios, { AxiosInstance } from 'axios'

const axios: AxiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_OW_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    params: {appid: process.env.REACT_APP_OW_KEY},
    timeout: 3000,

})

export default axios;