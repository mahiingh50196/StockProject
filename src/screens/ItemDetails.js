import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from '../component';
import moment from 'moment';

export default class ItemDetails extends Component {
  render() {
    const {itemData} = this.props.route.params;
    return (
      <View style={styles.wrapper}>
        <Header
          titleHeader="Item Details"
          EditItems={this.props.route.params.itemData}
          showedit={true}
          onPressEdit={() =>
            this.props.navigation.navigate('EditItem', {data: itemData})
          }
        />
        <View style={styles.stockview}>
          <View>
            <Text style={styles.shoestext}>{itemData.item}</Text>
          </View>
          <View>
            <Text style={styles.lastpurchasedtext}>Last Purchased</Text>
            <Text style={styles.date}>
              {moment(itemData.asOfDate.toString()).format('DD-MM-YYYY')}
            </Text>
          </View>
        </View>
        <View style={styles.mainview}>
          <View style={styles.alldatawrap}>
            <Text style={styles.alltextitem}>Sale Price</Text>
            <Text style={styles.alltextrs}>Rs.{itemData.salesPrice}</Text>
          </View>
          <View style={styles.alldatawrap}>
            <Text style={styles.alltextitem}>Purchase Price</Text>
            <Text style={styles.alltextrs}>Rs. {itemData.purchasePrice}</Text>
          </View>

          <View style={styles.alldatawrap}>
            <Text style={styles.alltextitem}>In Stock</Text>
            <Text style={styles.unitsvalue}>
              Rs.{itemData.stock}
              <Text style={styles.unitstext}>units</Text>
            </Text>
          </View>
          <View style={styles.alldatawrap}>
            <Text style={styles.alltextitem}>Total Stock Value</Text>
            <Text style={styles.alltextrs}>
              Rs.{itemData.salesPrice * itemData.stock}
            </Text>
          </View>
        </View>
        <View style={styles.buttonwrap}>
          <TouchableOpacity
            style={styles.edit}
            onPress={() => this.props.navigation.navigate('AdjustmentHistory')}>
            <Text style={styles.AdjustmentHistorytext}>Adjustment History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.adjuststock}
            onPress={() =>
              this.props.navigation.navigate('StockAdjustment', {
                itemData: itemData,
              })
            }>
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
    backgroundColor: 'white',
  },
  mainview: {
    borderWidth: 1,
    borderColor: '#E5E5E5',

    marginHorizontal: 15,
    marginVertical: 30,
    borderRadius: 10,
  },
  alldatawrap: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  unitsvalue: {
    color: '#333333',
  },
  unitstext: {
    fontSize: 15,
    color: '#AFAFAF',
  },
  stockview: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 30,
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
    marginLeft: 15,
  },

  alltextitem: {
    color: '#AFAFAF',
    fontSize: 15,
    lineHeight: 20,
  },
  alltextrs: {
    color: '#333333',
    fontSize: 13,
    lineHeight: 16,
  },
  buttonwrap: {
    marginTop: 30,
    marginHorizontal: 25,
  },
  edit: {
    borderWidth: 1,
    padding: 12,
    borderColor: '#8041E8',
    borderRadius: 12,
  },
  adjuststock: {
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#8041E8',
    borderRadius: 12,
    marginTop: 20,
  },
  adjusttext: {
    color: '#FFFFFF',
    alignSelf: 'center',

    fontSize: 16,
  },
  AdjustmentHistorytext: {
    color: '#8041E8',
    fontSize: 16,
    alignSelf: 'center',
  },
});
