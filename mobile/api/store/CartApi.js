import Axios from '../'

class CartApi {
    /**
     * For making CRUD calls against the backend REST API @ /api/store/carts
     */

     static getCart(cart_id){
         return Axios.get(`/store/carts/${cart_id}`)
     }

     static newCart(new_cart_object){
         return Axios.post(`/store/carts`, new_cart_object)
     }

     static updateCart(cart_id, updated_cart_obj){
         return Axios.put(`/store/carts/${cart_id}`, updated_cart_obj)
     }

     static deleteCart(cart_id){
         return Axios.delete(`/store/carts/${cart_id}`)
     }
}

export default CartApi