import Service from './Service';

export default class Usuario extends Service {

    constructor(usuario, senha) {

        super();

        this.serviceUrl = `${this.host}/login`;
        this.usuario = usuario;
        this.senha = senha;
    }

    autenticarUsuario = () => this.post(`${this.serviceUrl}`, {
        login: this.usuario,
        senha: this.senha
    });
}