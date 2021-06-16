import axios from "axios";

const client = axios.create({
    baseURL: 'https://www.omdbapi.com/',
    withCredentials: false
});

class Request_handler {
    
    static get(path = "" , postData) {
        let params = false
        if(postData){
            params = Object.keys(postData).map(key => key + '=' + postData[key]).join('&');
        }
        return client({
            method: "GET",
            url: params ? path + '?' + params : path,
        }).then( res =>{
            return res.data
        }).catch( error => {
            return error;
        });
    }

}

export { Request_handler };
