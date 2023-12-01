import axios from "axios";
const apiCall = async () => {
  try {
    const result = await axios.get(
      "https://menu-screen-server.vercel.app/allFoods"
    );
    return result.data;
  } catch (error) {
    return error;
  }
};
export default apiCall;
