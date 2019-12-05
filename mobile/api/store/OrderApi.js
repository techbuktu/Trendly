import Axios from '../'

class OrderApi {
    /**
     * For making CRUD calls against the REST backend API at /api/store/orders
     */
    static getOrder(order_id){
        return Axios.get(`/orders/${order_id}`)
    }

    static newOrder(new_order_object){
        return Axios.post(`/orders`, new_order_object)
    }

    static getOrdersforUser(user_id){
        return Axios.get(`/orders/for/${user_id}`)
    }
    
}

export default OrderApi 