import axios from "axios";
const apiCall = async () => {
  try {
    const result = await axios.get("http://localhost:8008/allFoods");
    return result.data;
  } catch (error) {
    return error;
  }
};
export default apiCall;
