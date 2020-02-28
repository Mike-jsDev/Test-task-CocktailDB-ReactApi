import axios from 'axios'

export default class CoctailsApi {
    static async getCategory() {
        return await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    }

    static async getCoctailsByCategory(param) {
        return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`)
    }
}