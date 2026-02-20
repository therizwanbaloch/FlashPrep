import axios from "axios"
import { setUserData } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
    const URL = import.meta.env.VITE_SERVER_URL;
    try {
        const response = await axios.get(URL+"/user/current-user", {withCredentials: true});
        dispatch(setUserData(response.data))
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}