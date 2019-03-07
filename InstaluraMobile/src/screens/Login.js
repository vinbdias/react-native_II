import React, { Component } from 'react';
import {
    StyleSheet,    
    TextInput,
    View,
    Dimensions,
    Button,
    Text
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Login extends Component {


    render() {

        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Instalura</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input} 
                        placeholder="Usuário..."
                        onChangeText={texto => this.setState({ usuario: texto })} />

                    <TextInput style={styles.input}
                        placeholder="Senha..."
                        onChangeText={texto => this.setState({ senha: texto })} /> 

                    <Button title="Login"
                    onPress={() => {}} />                   
                </View>
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
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 26
    }
});