import axios from 'axios'

const API = axios.create({
    baseURL:'https://data-visualization-dashboard-server-eight.vercel.app/api/dashboard'
    // baseURL:'http://localhost:5000/api/dashboard'
})

export default API