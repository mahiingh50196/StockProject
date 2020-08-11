import React, {Component} from 'react';
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';

export default class StockItem extends Component {
  constructor(props) {
    super(props);
  }
  renderItems = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('ItemDetails')}
        style={styles.mainView}>
        <View>
          <Text style={styles.text}>Item Name</Text>
          <Text style={styles.item}>{item.item}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={{flex: 1, paddingBottom: 100}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 100}}
          data={this.props.data}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    padding: 15,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 8,
  },
  text: {
    color: '#AFAFAF',
    padding: 2,
  },
  units: {
    padding: 2,
  },
  item: {
    color: '#333333',
  },
});
