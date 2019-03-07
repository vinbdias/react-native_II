import Service from './Service';

export default class FotosService extends Service {

    constructor() {

        super();

        this.serviceUrl = `${this.host}/fotos/rafael`;        
    }

    obterFotos = () => this.get(`${this.serviceUrl}`);
}