import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
params: {
    key:'59e88a52b3ed4b588ffd8300e613c1ed'
}

})