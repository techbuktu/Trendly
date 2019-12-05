import Axios from '../'

class UserApi {
	/**
		Call backend 'User' API(/api/profile/users) to perform CRUD ops against 
	*/

	static getAllUsers(){
        return Axios.get(`/users`);
    }

	static createUser(new_user_obj){
        return Axios.post(`/users`, new_user_obj);
    }

    static getUser(user_id){
        return Axios.get(`/users/${user_id}`);
    }

    static updateUser(user_id, updatedUserObj){
        return Axios.put(`/users/${user_id}`, updatedUserObj);
    }

    static deleteUser(user_id){
        return Axios.delete(`/users/${user_id}`);
	}
	
    static loginUser(login_creds){
        return Axios.post(`/auth/login`, login_creds);
    }

}

export default UserApi