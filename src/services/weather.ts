import { AxiosResponse } from "axios"
import axios from "utils/axios"

const gettWeatherInfoService = (lat: number, lon: number, lang: string = 'pt_br'): Promise<AxiosResponse> => {
    return axios.get('/data/2.5/weather', {params: { lat, lon, lang }})
}


export { gettWeatherInfoService }