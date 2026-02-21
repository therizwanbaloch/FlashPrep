import axios from "axios"
import { setUserData } from "../redux/userSlice";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const getCurrentUser = async (dispatch) => {
    try {
        const response = await axios.get(SERVER_URL+"/user/current-user", {withCredentials: true});
        dispatch(setUserData(response.data))
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}


export const generateNotes = async (payload) => {
  try {
    const response = await axios.post(
      SERVER_URL + "/notes/generate-notes",
      payload,
      { withCredentials: true }
    );
console.log(payload)
    console.log("Notes generated:", response.data);
    return response.data;

  } catch (error) {
    console.error("Error generating notes:", error);
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong while generating notes.";

    throw new Error(message);
  }
};