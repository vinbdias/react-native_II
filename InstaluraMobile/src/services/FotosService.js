export default class FotosService {

    constructor() {

        this.apiUrl = 'https://instalura-api.herokuapp.com/api/public/fotos/rafael';
    }

    obterFotos() {

        return fetch(`${this.apiUrl}`);
    }
}