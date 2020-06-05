import Axios from "axios"
import { CATEGORY_ENDPOINT } from "../utils/constants"

export const getCategories = () => {
    return Axios.get(CATEGORY_ENDPOINT);
}