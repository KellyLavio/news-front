import Axios from "axios";
import {PERSONNAL_DATA_ENDPOINT} from "../utils/constants";

export const getPersonalData = () => {
    return Axios.get(PERSONNAL_DATA_ENDPOINT, {headers: {"Authorization":`Bearer ${localStorage.getItem('front-user')}`}});
}