import React, { Component } from 'react';
import { View } from 'react-native';
import { Header ,Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: `AIzaSyClSZ-zyEWc47q3etV0-i3VT0NQYtC01ls`,
            authDomain: `auth-714d2.firebaseapp.com`,
            databaseURL: `https://auth-714d2.firebaseio.com`,
            projectId: `auth-714d2`,
            storageBucket: `auth-714d2.appspot.com`,
            messagingSenderId: `1050711025167`
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;