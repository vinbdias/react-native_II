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
  Text,
  View,
  Image,
  Dimensions,
  FlatList
} from 'react-native';

import Post from './src/components/Post';

import FotosServiceFactory from './src/services/FotosServiceFactory';

type Props = {};
export default class App extends Component<Props> {

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
  
  
  
  render() {

    const { fotos } = this.state;           

    return (
      <FlatList style={{marginTop: 20}}
          keyExtractor={item => String(item.id)}
          data={fotos}
          renderItem={ ({item}) =>
            <Post foto={item}/>
          }
      />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
});

