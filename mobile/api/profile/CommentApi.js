import Axios from '../'

class CommentApi {
    /**
     * Make CRUD calls against the Comment API backend at /api/profile/comments
     */

   static getCommentsforObject(object_id){
    return Axios.get(`/profile/comments/for/${object_id}`)
   }

   static newComment(new_comment_obj){
       return Axios.post(`/profile/comments`, new_comment_obj)
   }

   static getComment(comment_id){
       return Axios.get(`/profile/comments/${comment_id}`)
   }

   static deleteComment(comment_id){
       return Axios.delete(`/profile/comments/${comment_id}`)
   }

   static updateComment(comment_id){
       return Axios.put(`/profile/comments/${comment_id}`)
   }

}

export default CommentApi 