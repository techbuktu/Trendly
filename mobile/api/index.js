import axios from 'axios'

const auth_token = AsyncStorage.getItem('auth_token')
const RequestHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Content-Type': 'application/json',
	'x-auth_token': `${auth_token}`
}

const Axios = axios.create({
	baseUrl: 'http://localhost:5000/api',
	headers: RequestHeaders,
})

export default Axios 
