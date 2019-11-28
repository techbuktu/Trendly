import Axios from './'

class ProfileApi {
    /**
     * For performing CRUD ops against the backend REST API @ /api/profile/profiles
     */

    static newProfile(new_profile_obj){
        return Axios.post('/profile/profiles', new_profile_obj)
    }

    static getAllProfiles(){
        return Axios.get('/profile/profiles')
    }

    static updateProfile(profile_id, updated_profile){
        return Axios.put(`/profile/profiles/${profile_id}`, updated_profile)
    }

    static getSingleProfile(profile_id){
        return Axios.get(`/profile/profiles/${profile_id}`)
    }

    static deleteProfile(profile_id){
        return Axios.delete(`/profile/profile/${profile_id}`)
    }
    
}

export default ProfileApi 