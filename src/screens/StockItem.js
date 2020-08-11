import React, {Component} from 'react';
import {
  Text,
  FlatList,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class StockItem extends Component {
  renderItems = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.mainView}>
        <View style={styles.datawrap}>
          <Text style={styles.text}>Item Name</Text>
          <Text style={styles.item}>{item.item}</Text>
        </View>
        <View style={styles.datawrap}>
          <Text style={styles.text}>In Stock</Text>
          <Text>
            {item.stock}
            <Text style={styles.units}>Units</Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={{flex: 1, paddingBottom: 50}}>
        <ScrollView>
          <FlatList
            data={this.props.data}
            renderItem={this.renderItems}
            keyExtractor={(item, index) => item.id.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    //flex: 1,
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
