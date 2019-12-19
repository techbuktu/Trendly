import Axios from '../index'

class CategoryApi {
    /**
     * Make CRUD API calls against the backend Category REST endpoint at /api/store/categories
     */

     static getAllCategories(){
         return Axios.get(`/categories`)
     }

     static newCategory(new_category_object){
         return Axios.post(`/categories`, new_category_object)
     }

     static getCategory(category_id){
         return Axios.get(`/categories/${category_id}`)
     }

    static updateCategory(category_id, updated_category_obj){
         return Axios.put(`/categories/${category_id}`, updated_category_obj)
    }

    static deleteCategory(category_id){
        return Axios.delete(`/categories/${category_id}`)
    }

    static getProductsinCategory(category_id){
        return Axios.get(`/products/in/${category_id}`)
    }

}

export default CategoryApi