import Service from './Service';

export default class FotosService extends Service {

    constructor() {

        super();

        this.apiUrl = 'https://instalura-api.herokuapp.com/api/public/fotos/rafael';
        //this.apiUrl = `${this.localhost}/api/public/fotos/rafael`;
    }

    obterFotos() {

        return fetch(`${this.apiUrl}`);
    }
}