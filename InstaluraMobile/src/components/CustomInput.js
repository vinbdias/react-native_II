import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

export default class CustomInput extends Component {

    render() {

        const { placeholder, onChange, secure, capitalize } = this.props

        return(
            <TextInput style={styles.input}
                placeholder={placeholder}
                onChangeText={onChange}
                autoCapitalize={capitalize}
                secureTextEntry={secure} />            
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});