import Axios from '../'

class ProductApi {
    /**
     * For making CRUD calls against the Product API endpoint at /api/store/products
     */

    static getAllProducts(){
        return Axios.get(`/store/products`)
    }

    static getProduct(product_id){
        return Axios.get(`/store/products/${product_id}`)
    }

    static newProduct(new_product){
        return Axios.post(`/store/products`, new_product)
    }

    static updateProduct(product_id, updated_product_obj){
        return Axios.put(`/store/products/${product_id}`, updated_product_obj)
    }

    static deleteProduct(product_id){
        return Axios.delete(`/store/products/${product_id}`)
    }
    
}

export default ProductApi