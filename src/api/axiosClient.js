import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) =>
        queryString.stringify({ ...params, api_key: process.env.REACT_APP_API_KEY }),
})

axiosClient.interceptors.request.use(async (config) => {
    return config
})

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data
        }
        return response
    },
    (error) => {
        throw error
    }
)

export default axiosClient
