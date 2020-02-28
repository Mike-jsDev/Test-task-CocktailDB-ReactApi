import CoctailsApi from "../../api/coctails-api";
import {fetchAllCoctailsCategoryFinished, fetchCoctailsByCategoryFinished} from "./coctails.action";

export const fetchAllCoctailsCategory = () => async dispatch => {
    try {
        await CoctailsApi.getCategory().then(res => dispatch(fetchAllCoctailsCategoryFinished(res.data)));
    } catch (e) {
        console.log('errrrr', e)
    }
}

export const fetchCoctailsByCategory = (param) => async dispatch => {
    try {
        await CoctailsApi.getCoctailsByCategory(param).then(res => dispatch(fetchCoctailsByCategoryFinished(res.data)));
    } catch (e) {
        console.log('errrrr', e)
    }
}