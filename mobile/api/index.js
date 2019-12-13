import axios from 'axios'

//const auth_token = AsyncStorage.getItem('auth_token')
const RequestHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Content-Type': 'application/json',
	//'x-auth_token': `${auth_token}`
}

const Axios = axios.create({
	//baseUrl: 'http://172.18.204.15/:5000/api',
	//baseURL: 'http://localhost:5000/api',
	baseURL: 'http://172.18.206.209:5000/api',
	headers: RequestHeaders,
})

export default Axios 
