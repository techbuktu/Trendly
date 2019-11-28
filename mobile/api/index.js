import axios from 'axios'

const RequestHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Content-Type': 'application/json'
}

const Axios = axios.create({
	baseUrl: '/api',
	headers: RequestHeaders
})

export default Axios 
