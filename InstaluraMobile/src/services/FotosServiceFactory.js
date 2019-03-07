import FotosService from './FotosService';

export default class FotosServiceFactory {

    static listarFotos = () => new FotosService().obterFotos();
}