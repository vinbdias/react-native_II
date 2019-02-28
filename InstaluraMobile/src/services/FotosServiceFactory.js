import FotosService from './FotosService';

export default class FotosServiceFactory {

    static listarFotos = () => {

        return new FotosService().obterFotos();
    }
}