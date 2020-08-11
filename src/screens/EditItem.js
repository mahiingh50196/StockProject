import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';

import {Header, TextInput} from '../component';

import {APIUrl} from '../utils';

export default class CreateItem extends Component {
  constructor(props) {
    super(props);
    const {data} = this.props.route.params;
    this.state = {
      stockData: [],
      sellerId: 1,
      itemId: data.id.toString(),
      type: data.type.toString(),
      item: data.item.toString(),
      description: data.description.toString(),
      HSN: data.HSN.toString(),

      initialStock: data.initialStock.toString(),
      asOfDate: data.asOfDate.toString(),
      lowStockAlert: data.lowStockAlert.toString(),
      tax: data.tax.toString(),
      saleprice: data.salesPrice.toString(),
      purchaseprice: data.purchasePrice.toString(),
      stock: data.stock.toString(),
    };
  }

  addData = () => {
    // const {data} = this.props.route.params;
    console.warn(this.state);
    fetch(APIUrl + 'stock/add-new-item', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sellerId: this.state.sellerId,
        itemId: this.state.itemId,
        type: this.state.type,
        item: this.state.item,
        description: this.state.description,
        HSN: this.state.HSN,
        initialStock: this.state.initialStock,
        asOfDate: this.state.asOfDate,
        lowStockAlert: this.state.lowStockAlert,
        saleprice: this.state.salesPrice,
        purchasePrice: this.state.purchasePrice,
        stock: this.state.tax,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.warn('mahi', json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    // const {data} = this.props.route.params;

    // console.warn(this.state);
    return (
      <View style={styles.wrapper}>
        {/* <Text>{JSON.stringify(this.props.route.params.data)}</Text> */}
        <Header titleHeader="EditItem" />
        <ScrollView>
          <View style={styles.inputwrapper}>
            <TextInput
              label="Sale Price"
              value={this.state.saleprice}
              onChangeText={(text) => this.setState({saleprice: text})}
              placeholder="Enter Product Name"
            />
            <TextInput
              label="Purchase Price"
              value={this.state.purchaseprice}
              onChangeText={(text) => this.setState({purchaseprice: text})}
              placeholder="Product Description"
            />
            <TextInput
              label="Instock"
              value={this.state.stock}
              defaultValue="400"
              onChangeText={(text) => this.setState({stock: text})}
              placeholder="Product Description"
            />

            <View style={{flexDirection: 'row', marginTop: 20}}>
              <TouchableOpacity
                onPress={() => this.addData()}
                style={styles.savebutton}>
                <Text style={styles.savetext}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ItemDetails')}
                style={styles.cancelbutton}>
                <Text style={styles.savetext}>cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainradio: {
    marginTop: 5,
  },
  radio: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
  },
  allradio: {
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 100,
  },
  service: {
    marginRight: 30,
  },
  inputwrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  UntHsnwrapper: {
    flexDirection: 'row',
  },
  untwrap: {
    flex: 1,
    marginRight: 20,
  },
  hsnwrap: {
    flex: 1,
    marginLeft: 20,
  },
  stock: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    padding: 20,
    borderRadius: 10,
    shadowRadius: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stocktext: {
    color: '#8041E8',
  },
  stockdropdown: {
    //flexDirection: 'row',
    padding: 20,
    paddingBottom: 1,
    marginTop: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DBDBDB',
    // marginBottom: 20,
  },
  initialstock: {
    flex: 1,
    marginRight: 20,
  },
  AsofDate: {
    flex: 1,
    marginLeft: 20,
  },
  stockdirection: {flexDirection: 'row'},
  price: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    padding: 20,
    borderRadius: 10,
    shadowRadius: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  saleprice: {
    flex: 1,
    marginRight: 20,
  },
  PurchasePrice: {
    flex: 1,
    marginLeft: -10,
  },
  checkwrapper: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 20,
  },
  bothtaxtwraper: {flexDirection: 'row', flex: 1},
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 3,
    borderWidth: 1,
  },
  taxtextmargin: {marginLeft: 4},
  savebutton: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 24,
    backgroundColor: '#8041E8',
  },
  cancelbutton: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: '#AFAFAF',
    marginLeft: 10,
  },
  savetext: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 18,
    paddingVertical: 20,
    alignSelf: 'center',
  },
});

/*  */
