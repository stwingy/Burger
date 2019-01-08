import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-2bf53.firebaseio.com/'
})

export default instance
