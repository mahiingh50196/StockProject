import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../component/Header';
import {TextInput} from '../component/InputFields';

export default class Stockadjustment extends Component {
  render() {
    return (
      <View style={styles.mainview}>
        <Header titleHeader="Adjust Stock" />
        <View style={styles.stockview}>
          <View>
            <Text style={styles.shoestext}>Shoes</Text>
          </View>
          <View>
            <Text style={styles.instock}>In Stock</Text>
            <Text style={styles.units}>
              400<Text>Units</Text>
            </Text>
          </View>
        </View>
        <View style={styles.inputwrapper}>
          <TextInput label="Adjustment Date" placeholder="Date" />
          <TextInput label="Adjust Stock" />
          <TextInput label="Internal Note" placeholder="Any notes?" />
        </View>

        <TouchableOpacity style={styles.savewrap}>
          <Text style={styles.textsave}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainview: {
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
  instock: {
    color: '#CCCCCC',
    lineHeight: 25,
    fontSize: 18,
  },
  units: {
    color: '#333333',
    fontSize: 16,
    lineHeight: 25,
  },
  inputwrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  savewrap: {
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#8041E8',
    marginHorizontal: 18,
    borderRadius: 8,
    marginTop: 20,
  },
  textsave: {
    alignSelf: 'center',
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
  },
});
