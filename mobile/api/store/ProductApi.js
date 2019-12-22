import Axios from '../'

class ProductApi {
    /**
     * For making CRUD calls against the Product API endpoint at /api/store/products
     */

    static getAllProducts(){
        return Axios.get(`/products`)
    }

    static getProduct(product_id){
        return Axios.get(`/products/${product_id}`)
    }

    static newProduct(new_product){
        return Axios.post(`/products`, new_product)
    }

    static updateProduct(product_id, updated_product_obj){
        return Axios.put(`/products/${product_id}`, updated_product_obj)
    }

    static deleteProduct(product_id){
        return Axios.delete(`/products/${product_id}`)
    }

    static getProductsinCategory(category_id){
        return Axios.get(`/products/${category_id}`)
    }
    
}

export default ProductApi