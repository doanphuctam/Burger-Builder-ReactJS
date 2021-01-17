import axios, { } from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-d557f-default-rtdb.firebaseio.com/"
})

export default instance;