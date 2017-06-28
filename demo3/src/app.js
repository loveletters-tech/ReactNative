import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    ComponentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyClSZ-zyEWc47q3etV0-i3VT0NQYtC01ls',
                authDomain: 'auth-714d2.firebaseapp.com',
                databaseURL: 'https://auth-714d2.firebaseio.com',
                projectId: 'auth-714d2',
                storageBucket: 'auth-714d2.appspot.com',
                messagingSenderId: '1050711025167'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;