import Axios from '../'

class CategoryApi {
    /**
     * Make CRUD API calls against the backend Category REST endpoint at /api/store/categories
     */

     static getAllCategories(){
         return Axios.get(`/store/categories`)
     }

     static newCategory(new_category_object){
         return Axios.post(`/store/categories`, new_category_object)
     }

     static getCategory(category_id){
         return Axios.get(`/store/categories/${category_id}`)
     }

     static updateCategory(category_id, updated_category_obj){
         return Axios.put(`/store/categories/${category_id}`, updated_category_obj)
    }

    static deleteCategory(category_id){
        return Axios.delete(`/store/categories/${category_id}`)
    }

}

export default CategoryApi