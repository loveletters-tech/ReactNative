import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet} from 'react-native';

const users = [
    {name: 'tech'},
    {name: 'tech2' },
    {name: 'tec3' },
    {name: 'tech' }
]

export default class demo4 extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userdataSource: ds.cloneWithRows(users),
        };
    }

    renderRow(user, sectionId, rowId, highlightRow){
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}</Text>
            </View>
        )
    }

  render(){
    return(
      <View>
        <ListView
            dataSource={this.state.userdataSource}
            renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 4
    },
    rowText: {
        flex: 1
    }
});

AppRegistry.registerComponent('Demo4', () => Demo4);