import axios from "axios";

const API_KEY = "c34efdc8ec4d43dfa0a3980567efbefd";

axios.defaults.baseURL = "https://api.opencagedata.com/geocode/v1/json";

export const userInfo = async ({ latitude, longitude }) => {
  try {
    const { data } = await axios.get(
      `?q=${latitude}+${longitude}&key=${API_KEY}`
    );
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
};
