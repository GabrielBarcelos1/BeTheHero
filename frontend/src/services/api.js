import axios from 'axios'

const api = axios.create({
    baseURL:'https://be-the-hero-rouge.vercel.app/'
})

export default api