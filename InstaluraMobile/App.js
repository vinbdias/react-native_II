/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  FlatList
} from 'react-native';

import Post from './src/components/Post';

import FotosServiceFactory from './src/services/FotosServiceFactory';

export default class App extends Component {

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
  
  like = idFoto => {

    const foto = this.state.fotos.find(foto => foto.id === idFoto);

    let novaLista = [];

    if (!foto.likeada)
      novaLista = [
        ...foto.likers,
        { login: 'meuUsuario' }
      ];
    else
      novaLista = foto.likers.filter(liker => liker.login !== 'meuUsuario');

    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: novaLista
    };

    const fotos = this.state.fotos
      .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto);

    this.setState({ fotos: fotos });
  }  

  adicionaComentario = (idFoto, valorComentario, inputComentario) => {

    if (valorComentario === '')
      return;

    const foto = this.state.fotos.find(foto => foto.id === idFoto);

    const novaLista = [...foto.comentarios, {
      id: valorComentario,
      login: 'meuUsuario',
      texto: valorComentario
    }];

    const fotoAtualizada = {
      ...foto,
      comentarios: novaLista
    };

    const fotos = this.state.fotos
      .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto);

    this.setState({fotos});

    inputComentario.clear();
  };   
  
  render() {

    const { fotos } = this.state;           

    return (
      <FlatList style={{marginTop: 20}}
          keyExtractor={item => String(item.id)}
          data={fotos}
          renderItem={ ({item}) =>
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

