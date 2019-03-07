import UsuarioService from './UsuarioService';
import Usuario from './UsuarioService';

export default class UsuarioServiceFactory {

    static loginUsuario = (usuario, senha) => new Usuario(usuario, senha).autenticarUsuario();
}