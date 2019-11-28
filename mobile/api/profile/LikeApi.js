import Axios from '../'

class LikeApi {
    /**
     * For making CRUD calls against the Like API REST endpoint @ /api/profile/likes
     */
    static newLike(target_object){
        return Axios.post(`/profile/likes`, target_object)
    }

    getLikesforObject(target_obj_id){
        return Axios.get(`/profile/likes/for/`, target_obj_id)
    }

    static deleteLike(like_id){
        return Axios.delete(`/profile/likes/${like_id}`)
    }


}

export default LikeApi 