
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

import InputComentario from './InputComentario';
import Likes from './Likes';

const width = Dimensions.get('screen').width,
    height = Dimensions.get('screen').height;

export default class Post extends Component {

    exibeLegenda = foto => {

        return foto.comentario !== '' ?
            <View style={styles.comentario}>
                <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
                <Text>{foto.comentario}</Text>
            </View> : null
    }

    render() {

        const { foto, likeCallback, comentarioCallback } = this.props;

        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{ uri: foto.urlPerfil }}
                        style={styles.fotoDePerfil} />
                    <Text>{foto.loginUsuario}</Text>
                </View>

                <Image source={{ uri: foto.urlFoto }}
                    style={styles.foto} />

                <View style={styles.rodape}>
                    <Likes likeCallback={likeCallback} foto={foto} />
                    {this.exibeLegenda(foto)}

                    {foto.comentarios.map(comentario =>
                        <View style={styles.comentario} key={comentario.id}>
                            <Text style={styles.tituloComentario}>{comentario.login}</Text>
                            <Text>{comentario.texto}</Text>
                        </View>
                    )}

                    <InputComentario idFoto={foto.id} comentarioCallback={comentarioCallback} />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    fotoDePerfil: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40,
    },
    foto: {
        width: width,
        height: height
    },
    rodape: {
        margin: 10
    },
    comentario: {
        flexDirection: 'row'
    },
    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    }
});

