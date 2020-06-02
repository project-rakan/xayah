import axios from "axios";

if (!process.env.REACT_APP_RAKAN_BASE_URL) {
    throw new Error("Rakan Base url is not defined");
}

export default axios.create({
    baseURL: process.env.REACT_APP_RAKAN_BASE_URL,
});
