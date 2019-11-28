import Axios from '../'

class FeedApi {
    /**
     * Make CRUD calls against the REST backend API at /api/profile/feeds
     */

    static postFeed(new_feed){
         return Axios.post(`/profile/feeds`, new_feed)
     }

    static getFeedsforUser(user_id){
         return Axios.get(`/store/feeds/for/${user_id}`)
     }

    static updateFeed(feed_id, updated_feed){
        return Axios.put(`/profile/feeds/${feed_id}`, updated_feed)
    }

    static deleteFeed(feed_id){
        return Axios.delete(`/profile/feeds/${feed_id}`)
    }
}

export default FeedApi 