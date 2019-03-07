/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    FlatList
} from 'react-native';
import Post from './Post';
import FotosServiceFactory from '../services/FotosServiceFactory';

export default class Feed extends Component {

    constructor(props) {

        super(props)

        this.state = {
            fotos: []
        }
    }

    componentDidMount = () => {

        FotosServiceFactory.listarFotos()
            .then(resposta => resposta.json())
            .then(json => this.setState({ fotos: json }))
            .catch(error => console.log(error));
    };

    buscaFotoPorId = idFoto => this.state.fotos.find(foto => foto.id === idFoto);

    atualizaFotos = fotoAtualizada => this.setState({
        fotos: this.state.fotos.map(
            foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto
        )
    });

    like = idFoto => {

        const foto = this.buscaFotoPorId(idFoto);

        let novaLista = [];

        if (!foto.likeada)
            novaLista = [
                ...foto.likers,
                { login: 'meuUsuario' }
            ];
        else
            novaLista = foto.likers.filter(liker => liker.login !== 'meuUsuario');

        this.atualizaFotos({
            ...foto,
            likeada: !foto.likeada,
            likers: novaLista
        });
    }

    adicionaComentario = (idFoto, valorComentario, inputComentario) => {

        if (valorComentario === '')
            return;

        const foto = this.buscaFotoPorId(idFoto);

        const novaLista = [...foto.comentarios, {
            id: valorComentario,
            login: 'meuUsuario',
            texto: valorComentario
        }];

        this.atualizaFotos({
            ...foto,
            comentarios: novaLista
        });

        inputComentario.clear();
    };

    render() {

        const { fotos } = this.state;

        return (
            <FlatList style={styles.container}
                keyExtractor={item => String(item.id)}
                data={fotos}
                renderItem={({ item }) =>
                    <Post foto={item}
                        likeCallback={this.like}
                        comentarioCallback={this.adicionaComentario} />
                }
            />
        );
    }
}

const margem = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
    container: {
        marginTop: margem
    }
});

