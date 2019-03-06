import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,  
  TouchableOpacity  
} from 'react-native';

export default class Likes extends Component {

  carregaIcone = likeada => likeada ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png');

  exibeLikes = likers => likers.length > 0 ? <Text style={styles.likes}>{likers.length} curtida{likers.length > 1 ? `s` : ``}</Text> : null;  

  render() {

    const { likeCallback, foto } = this.props;    

    return (      
      <View>
        <TouchableOpacity onPress={likeCallback}>
          <Image style={styles.botaoLike}
            source={this.carregaIcone(foto.likeada)} />
        </TouchableOpacity>

        { this.exibeLikes(foto.likers) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  botaoLike: {
    marginBottom: 10,
    height: 40,
    width: 40
  },
  likes: {
    fontWeight: 'bold'
  }  
});