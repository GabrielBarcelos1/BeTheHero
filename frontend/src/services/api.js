import axios from 'axios'

const api = axios.create({
    baseURL:'https://cors.bridged.cc/https://be-the-hero-rouge.vercel.app/'
})

export default api