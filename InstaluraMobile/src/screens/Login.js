import React, { Component } from 'react';
import {
    StyleSheet,    
    TextInput,
    View,
    Dimensions,
    Button,
    Text,
    AsyncStorage
} from 'react-native';
import CustomInput from '../components/CustomInput';
import UsuarioServiceFactory from '../services/UsuarioServiceFactory';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Login extends Component {

    constructor() {

        super();

        this.state = {
            usuario: '',
            senha: '',
            mensagem: ''
        };
    }

    efetuaLogin = () => {

        const { usuario, senha } = this.state;

        UsuarioServiceFactory.loginUsuario(usuario, senha)
            .then(response => {

                if(response.ok)
                    return response.text();

                throw new Error('Não foi possível efetuar login.');
            })
            .then(token => {

                AsyncStorage.multiSet([
                    ['usuario', usuario],
                    ['token', token]
                ]);
            })
            .catch(error => this.setState({ mensagem: error.message }));
    };


    render() {

        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Instalura</Text>
                <View style={styles.form}>
                    <CustomInput placeholder="Usuário..."
                        onChange={text => this.setState({ usuario: text })} />

                    <CustomInput placeholder="Senha..."
                        onChange={text => this.setState({ senha: text })}
                        secure={true} /> 

                    <Button title="Login"
                        onPress={this.efetuaLogin} />                   
                </View>

                <Text style={styles.mensagem}>{this.state.mensagem}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: width * 0.8
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 26
    },
    mensagem: {
        marginTop: 15,
        color: '#e74c3c'
    }
});