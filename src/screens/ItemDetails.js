import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../component/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class ItemDetails extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Header titleHeader="Item Details" />
        <View style={styles.stockview}>
          <View>
            <Text style={styles.shoestext}>Shoes</Text>
          </View>
          <View>
            <Text style={styles.lastpurchasedtext}>Last Purchased</Text>
            <Text style={styles.date}>11-02-2020</Text>
          </View>
        </View>
        <View style={styles.data}>
          <View>
            <Text style={styles.alltextitem}>Item Name</Text>
            <Text style={styles.alltextitem}>Purchased Price</Text>
            <Text style={styles.alltextitem}>In Stock(Qty)</Text>
            <Text style={styles.alltextitem}>Total Stock Value</Text>
          </View>
          <View>
            <Text style={styles.alltextrs}>Rs. 50</Text>
            <Text style={styles.alltextrs}>Rs. 20</Text>
            <Text style={styles.alltextrs}>
              Rs. 400<Text style={styles.unit}>Units</Text>
            </Text>
            <Text style={styles.alltextrs}>Rs.20000</Text>
          </View>
        </View>
        <View style={styles.editadjust}>
          <TouchableOpacity style={styles.edit}>
            <Text style={styles.textedit}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.adjuststock}
            onPress={() => this.props.navigation.navigate('StockAdjustment')}>
            <Text style={styles.adjusttext}>Adjust Stock</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  stockview: {
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'space-between',
  },
  shoestext: {
    color: '#333333',
    fontSize: 20,
    lineHeight: 21,
  },
  lastpurchasedtext: {
    color: '#CCCCCC',
    lineHeight: 25,
    fontSize: 18,
  },
  date: {
    marginTop: 5,
    color: '#333333',
    fontSize: 18,
    lineHeight: 25,
  },
  data: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  alltextitem: {
    paddingBottom: 20,
    color: '#AFAFAF',
    fontSize: 15,
    lineHeight: 20,
  },
  alltextrs: {
    paddingBottom: 20,
    color: '#333333',
    fontSize: 13,
    lineHeight: 16,
  },
  unit: {
    color: '#AFAFAF',
    fontSize: 15,
    lineHeight: 16,
  },
  editadjust: {
    flex: 1,
    paddingHorizontal: 20,
  },
  edit: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#8041E8',
    borderRadius: 8,
  },
  adjuststock: {
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#8041E8',
    borderRadius: 8,
    marginTop: 30,
  },
  adjusttext: {
    color: '#FFFFFF',
    alignSelf: 'center',
    padding: 8,
    borderRadius: 10,
  },
  textedit: {
    paddingLeft: 130,
    padding: 8,
    borderRadius: 10,
    color: '#8041E8',
    fontSize: 16,
    lineHeight: 20,
  },
});
