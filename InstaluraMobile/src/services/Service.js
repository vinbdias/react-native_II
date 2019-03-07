import { Platform } from 'react-native';

export default class Service {

    constructor() {

        this.localhost = Platform.OS === 'ios' ? 'http://localhost:8080' : 'http://10.0.2.2:8080';
    }
}