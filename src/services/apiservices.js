import axios from 'axios';
import {Storage} from '../helper';

const BASE_URL = "http://api-meme-zendvn-01.herokuapp.com/api";

const api = {
    call() {
        return axios.create({
            baseURL:BASE_URL,
            header:{
                'Content-Type':'application/json'
            }
        })
    },
    callWithAuth(headers = {}){
        const token = Storage.getToken();
        return axios.create({
            baseURL:BASE_URL,
            header:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`,
                ...headers
            }
        })
    }
}

export default api;