import { Platform } from 'react-native';

const localhost = Platform.OS === 'ios' ? 'http://localhost:8080' : 'http://10.0.2.2:8080';

export default class FotosService {

    constructor() {

        this.apiUrl = 'https://instalura-api.herokuapp.com/api/public/fotos/rafael';
        //this.apiUrl = `${localhost}/api/public/fotos/rafael`;
    }

    obterFotos() {

        return fetch(`${this.apiUrl}`);
    }
}