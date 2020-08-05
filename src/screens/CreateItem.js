import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import Header from '../component/Header';
import {TextInput} from '../component/InputFields';
import Icon from 'react-native-vector-icons/AntDesign';
import {APIurl} from '../utils/Urls';
import axios from 'axios';

export default class CreateItem extends Component {
  constructor() {
    super();

    this.state = {
      showstock: false,
      showprice: false,
      visible: false,
      activestatus: 1,
      sellerId: '',
      type: '',
      item: '',
      description: '',
      SAC: '',
      HSN: '',
      stock: '',
      initialStock: '',
      asOfDate: '',
      lowStockAlert: '',
      salesPrice: '',
      purchasePrice: '',
      tax: '',
    };
  }
  //{{url}}/api/stock/add-new-item
  add() {
    axios
      .post(APIurl + 'stock/add-new-item', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   sellerId: this.state.sellerId,
        //   type: this.state.type,
        //   item: this.state.item,
        //   description: this.state.description,
        //   SAC: this.state.SAC,
        //   HSN: this.state.HSN,
        //   initialStock: this.state.initialStock,
        //   asOfDate: this.state.asOfDate,
        //   lowStockAlert: this.state.lowStockAlert,
        //   salesPrice: this.state.salesPrice,
        //   purchasePrice: this.state.purchasePrice,
        //   tax: this.state.tax,
        // }),
        body: JSON.stringify({
          sellerId: '1',
          type: 'stocksdata',
          item: 'test item added',
          description: '',
          HSN: '0123456',
          initialStock: 100,
          asOfDate: '01/07/2020',
          lowStockAlert: 10,
          salesPrice: 10,
          purchasePrice: 8,
          tax: '0%',
        }),
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.status === 'ok') {
          this.setState({
            item: '',
            description: '',
            SAC: '',
            stock: '',
            HSN: '',
            initialStock: '',
            asOfDate: '',
            lowStockAlert: '',
            salesPrice: '',
            purchasePrice: '',
            tax: '',
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <Header titleHeader="CreateItem" />
          <View style={styles.mainradio}>
            <View style={styles.allradio}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({activestatus: 1});
                  }}
                  style={[
                    styles.radio,
                    {
                      backgroundColor:
                        this.state.activestatus === 1 ? 'black' : 'transparent',
                    },
                  ]}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text>Goods</Text>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({activestatus: 2});
                  }}
                  style={[
                    styles.radio,
                    {
                      backgroundColor:
                        this.state.activestatus === 2 ? 'black' : 'transparent',
                      marginLeft: 10,
                    },
                  ]}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text>Services</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputwrapper}>
            {this.state.activestatus === 1 ? (
              <View>
                <TextInput
                  label="Item Name"
                  value={this.state.item}
                  onChangeText={(item) => this.setState({item})}
                  placeholder="Enter Product Name"
                />
                <TextInput
                  label="Description"
                  value={this.state.description}
                  onChangeText={(description) => this.setState({description})}
                  placeholder="Product Description"
                />
                <View style={styles.UntHsnwrapper}>
                  <View style={styles.untwrap}>
                    <TextInput
                      label="Units"
                      value={this.state.units}
                      onChangeText={(stock) => this.setState({stock})}
                    />
                  </View>
                  <View style={styles.hsnwrap}>
                    <TextInput
                      label="HSN"
                      placeholder="HSN No"
                      value={this.state.HSN}
                      onChangeText={(HSN) => this.setState({HSN})}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({showstock: !this.state.showstock})
                  }>
                  <View style={styles.stock}>
                    <Text style={styles.stocktext}>Stock</Text>
                    {this.state.showstock ? (
                      <Icon name="down" size={20} color="#DBDBDB" />
                    ) : (
                      <Icon name="right" color="#DBDBDB" size={20} />
                    )}
                  </View>
                  {/* </TouchableOpacity> */}
                  {this.state.showstock ? (
                    // <TouchableOpacity>
                    <View style={styles.stockdropdown}>
                      <View style={styles.stockdirection}>
                        <View style={styles.initialstock}>
                          <TextInput
                            label="Initial Stock"
                            placeholder="Initial Stock"
                            value={this.state.initialStock}
                            onChangeText={(initialStock) =>
                              this.setState({initialStock})
                            }
                          />
                        </View>
                        <View style={styles.AsofDate}>
                          <TextInput
                            label="AsofDate"
                            placeholder="Date"
                            value={this.state.asOfDate}
                            onChangeText={(asOfDate) =>
                              this.setState({asOfDate})
                            }
                          />
                        </View>
                      </View>
                      <View>
                        <TextInput
                          label="lowStockAlert"
                          placeholder="Low Stock Alert"
                          value={this.state.lowStockAlert}
                          onChangeText={(lowStockAlert) =>
                            this.setState({lowStockAlert})
                          }
                        />
                      </View>
                    </View>
                  ) : null}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({showprice: !this.state.showprice})
                  }>
                  <View style={styles.price}>
                    <Text style={styles.stocktext}>Price</Text>
                    {this.state.showprice ? (
                      <Icon name="down" size={20} color="#DBDBDB" />
                    ) : (
                      <Icon name="right" color="#DBDBDB" size={20} />
                    )}
                  </View>
                  {/* </TouchableOpacity> */}
                  {this.state.showprice ? (
                    // <TouchableOpacity>
                    <View style={styles.stockdropdown}>
                      <View style={styles.stockdirection}>
                        <View style={styles.saleprice}>
                          <TextInput
                            label="SalePrice"
                            placeholder="Date"
                            value={this.state.salesPrice}
                            onChangeText={(salesPrice) =>
                              this.setState({salesPrice})
                            }
                          />
                        </View>
                        <View style={styles.PurchasePrice}>
                          <TextInput
                            label="PurchasePrice"
                            placeholder="Date"
                            value={this.state.purchasePrice}
                            onChangeText={(purchasePrice) =>
                              this.setState({purchasePrice})
                            }
                          />
                        </View>
                      </View>
                      <View>
                        <View style={styles.checkwrapper}>
                          <View style={styles.bothtaxtwraper}>
                            <View>
                              <TouchableOpacity style={styles.checkbox} />
                            </View>
                            <View style={styles.taxtextmargin}>
                              <Text>IncludingaTax</Text>
                            </View>
                          </View>
                          <View style={styles.bothtaxtwraper}>
                            <View>
                              <TouchableOpacity style={styles.checkbox} />
                            </View>
                            <View style={styles.taxtextmargin}>
                              <Text>ExcludingTax</Text>
                            </View>
                          </View>
                        </View>
                        <TextInput
                          label="Tax"
                          placeholder="10 days"
                          value={this.state.tax}
                          onChangeText={(tax) => this.setState({tax})}
                        />
                      </View>
                    </View>
                  ) : null}
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TextInput
                  label="Item Name"
                  value={this.state.item}
                  onChangeText={(text) => this.setState({item: text})}
                  placeholder="Enter Product Name"
                />
                <TextInput
                  label="Description"
                  value={this.state.description}
                  placeholder="Product Description"
                />
                <TextInput
                  label="HSN"
                  value={this.state.SAC}
                  placeholder="enter hsn"
                />
                <TouchableOpacity
                  onPress={() =>
                    this.setState({showprice: !this.state.showprice})
                  }>
                  <View style={styles.price}>
                    <Text style={styles.stocktext}>Price</Text>
                    {this.state.showprice ? (
                      <Icon name="down" size={20} color="#DBDBDB" />
                    ) : (
                      <Icon name="right" color="#DBDBDB" size={20} />
                    )}
                  </View>
                  {/* </TouchableOpacity> */}
                  {this.state.showprice ? (
                    // <TouchableOpacity>
                    <View style={styles.stockdropdown}>
                      <TextInput
                        label="SalePrice"
                        value={this.state.salesPrice}
                        placeholder="Date"
                        onChangeText={(salesPrice) =>
                          this.setState({salesPrice})
                        }
                      />

                      <View>
                        <View style={styles.checkwrapper}>
                          <View style={styles.bothtaxtwraper}>
                            <View>
                              <TouchableOpacity style={styles.checkbox} />
                            </View>
                            <View style={styles.taxtextmargin}>
                              <Text>IncludingaTax</Text>
                            </View>
                          </View>
                          <View style={styles.bothtaxtwraper}>
                            <View>
                              <TouchableOpacity style={styles.checkbox} />
                            </View>
                            <View style={styles.taxtextmargin}>
                              <Text>ExcludingTax</Text>
                            </View>
                          </View>
                        </View>
                        <TextInput
                          label="Tax"
                          placeholder="10 days"
                          value={this.state.tax}
                          onChangeText={(tax) => this.setState({tax})}
                        />
                      </View>
                    </View>
                  ) : null}
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity onPress={() => this.add()} style={styles.save}>
              <Text style={styles.savetext}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  mainradio: {
    marginTop: 5,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
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
  save: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    padding: 20,
    backgroundColor: '#8041E8',
  },
  savetext: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 18,
    paddingHorizontal: 120,
  },
});
