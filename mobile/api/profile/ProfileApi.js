import Axios from '../'

class ProfileApi {
    /**
     * For performing CRUD ops against the backend REST API @ /api/profile/profiles
     */

    static newProfile(new_profile_obj){
        return Axios.post('/profiles', new_profile_obj)
    }

    static getAllProfiles(){
        return Axios.get('/profiles')
    }

    static updateProfile(profile_id, updated_profile){
        return Axios.put(`/profiles/${profile_id}`, updated_profile)
    }

    static getSingleProfile(profile_id){
        return Axios.get(`/profiles/${profile_id}`)
    }

    static deleteProfile(profile_id){
        return Axios.delete(`/${profile_id}`)
    }

}

export default ProfileApi 