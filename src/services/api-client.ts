import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'f1989cdbaf234396a2bed8e6dfe8a958'
    }
})