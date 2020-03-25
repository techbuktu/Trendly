import Axios from '../'

class CartApi {
    /**
     * For making CRUD calls against the backend REST API @ /api/store/carts
     */

     static getCart(cart_id){
         return Axios.get(`/carts/${cart_id}`)
     }

     static newCart(new_cart_object){
         return Axios.post(`/carts`, new_cart_object)
     }

     static updateCart(cart_id, updated_cart_obj){
         return Axios.put(`/carts/${cart_id}`, updated_cart_obj)
     }

     static deleteCart(cart_id){
         return Axios.delete(`/carts/${cart_id}`)
     }
}

export default CartApi