import { Platform } from 'react-native';

export default class Service {

    constructor() {

        //this.host = Platform.OS === 'ios' ? 'http://localhost:8080' : 'http://10.0.2.2:8080';
        this.host = `https://instalura-api.herokuapp.com/api/public`;
    }

    get = url => fetch(url);

    post = (url, data) => fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
}