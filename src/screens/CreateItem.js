import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Header, TextInput} from '../component';
import CustomPicker from '../component/Picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {APIUrl} from '../utils';

export default class CreateItem extends Component {
  constructor() {
    super();

    this.state = {
      showstock: false,
      showprice: false,
      itemNameError: '',
      PickerValue: '',
      activestatus: 1,
      sellerId: 1,
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
      visiblePicker: false,
      isManualTexEntry: false,
    };
  }

  add() {
    console.warn(this.state);
    fetch(APIUrl + 'stock/add-new-item', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sellerId: this.state.sellerId,
        type: this.state.activestatus === 1 ? 'goods' : 'services',
        item: this.state.item,
        description: this.state.description,
        SAC: this.state.SAC,
        HSN: this.state.HSN,
        initialStock: this.state.initialStock,
        asOfDate: this.state.asOfDate,
        lowStockAlert: this.state.lowStockAlert,
        salesPrice: this.state.salesPrice,
        purchasePrice: this.state.purchasePrice,
        tax: this.state.isManualTexEntry
          ? this.state.tax + '%'
          : this.state.tax,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log('mahi', json);
        if (json.status === 'ok') {
          this.props.route.params.onSucess();
          setTimeout(() => {
            this.props.navigation.goBack('Stockview');
          }, 200);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  itemNameValidator = () => {
    if (this.state.item === '') {
      this.setState({itemNameError: 'please enter item name'});
    } else {
      this.setState({itemNameError: ''});
    }
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <Header titleHeader="CreateItem" />
        <ScrollView>
          <View style={styles.allradio}>
            <TouchableOpacity
              onPress={() => {
                this.setState({activestatus: 1});
              }}
              style={[
                styles.goodsradio,
                {
                  backgroundColor:
                    this.state.activestatus === 1 ? '#8041E8' : 'transparent',
                },
              ]}
            />

            <Text style={styles.goodstext}>Goods </Text>

            <TouchableOpacity
              onPress={() => {
                this.setState({activestatus: 2});
              }}
              style={[
                styles.serviceradio,
                {
                  backgroundColor:
                    this.state.activestatus === 2 ? '#8041E8' : 'transparent',
                  marginLeft: 10,
                },
              ]}
            />

            <Text style={styles.servicetext}>Services</Text>
          </View>

          <View style={styles.inputwrapper}>
            {this.state.activestatus === 1 ? (
              <View>
                <TextInput
                  label="Item Name"
                  value={this.state.item}
                  onBlur={() => this.itemNameValidator()}
                  onChangeText={(item) => this.setState({item})}
                  placeholder="Enter Product Name"
                />
                {this.state.itemNameError && this.state.itemNameError != '' ? (
                  <Text style={styles.itemnametext}>
                    {this.state.itemNameError}
                  </Text>
                ) : null}

                <TextInput
                  label="Description"
                  value={this.state.description}
                  maxLength={25}
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
                      keyboardType="numeric"
                      onChangeText={(text) =>
                        this.setState({HSN: text.replace(/[^0-9]/g, '')})
                      }
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

                  {this.state.showstock ? (
                    <View style={styles.stockdropdown}>
                      <TextInput
                        label="Initial Stock"
                        placeholder="Initial Stock"
                        value={this.state.initialStock}
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={(text) =>
                          this.setState({
                            initialStock: text.replace(/[^0-9]/g, ''),
                          })
                        }
                      />

                      <TextInput
                        label="lowStockAlert"
                        placeholder="Low Stock Alert"
                        value={this.state.lowStockAlert}
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={(text) =>
                          this.setState({
                            lowStockAlert: text.replace(/[^0-9]/g, ''),
                          })
                        }
                      />
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

                  {this.state.showprice ? (
                    <View style={styles.stockdropdown}>
                      <View style={styles.stockdirection}>
                        <View style={styles.saleprice}>
                          <TextInput
                            label="SalePrice"
                            keyboardType="phone-pad"
                            maxLength={10}
                            placeholder="SalePrice"
                            value={this.state.salesPrice}
                            onChangeText={(text) =>
                              this.setState({
                                salesPrice: text.replace(/[^0-9]/g, ''),
                              })
                            }
                          />
                        </View>
                        <View style={styles.PurchasePrice}>
                          <TextInput
                            label="PurchasePrice"
                            keyboardType="numeric"
                            maxLength={10}
                            placeholder="PurchasePrice"
                            value={this.state.purchasePrice}
                            onChangeText={(text) =>
                              this.setState({
                                purchasePrice: text.replace(/[^0-9]/g, ''),
                              })
                            }
                          />
                        </View>
                      </View>
                      <View>
                        <View style={styles.checkbox}>
                          <CheckBox
                            value={this.state.isManualTexEntry}
                            onValueChange={(newValue) =>
                              this.setState({isManualTexEntry: newValue})
                            }
                            tintColors={{true: '#8041E8', false: 'black'}}
                          />
                          <Text style={styles.manualtext}>
                            Manually Enter Tax
                          </Text>
                        </View>
                        <TextInput
                          label="Tax"
                          placeholder="10 days"
                          value={this.state.tax}
                          onChangeText={(tax) => this.setState({tax})}
                          onPress={() => this.setState({visiblePicker: true})}
                          editable={this.state.isManualTexEntry}
                          keyboardType="numeric"
                          renderRightIcon={
                            !this.state.isManualTexEntry && (
                              <Icon name="caretdown" />
                            )
                          }
                        />

                        <CustomPicker
                          title="Select Tax"
                          visible={this.state.visiblePicker}
                          items={[
                            {
                              id: 1,
                              name: '0',
                            },
                            {
                              id: 2,
                              name: 'Non GST',
                            },
                            {
                              id: 3,
                              name: 'GST@0%',
                            },
                            {
                              id: 4,
                              name: 'IGST@0%',
                            },
                            {
                              id: 5,
                              name: 'GST@0.25%',
                            },
                            {
                              id: 6,
                              name: 'IGST@0.25%',
                            },

                            {
                              id: 7,
                              name: 'GST@3%',
                            },
                            {
                              id: 8,
                              name: 'IGST@3%',
                            },
                            {
                              id: 9,
                              name: 'GST@5%',
                            },
                            {
                              id: 10,
                              name: 'IGST@5%',
                            },
                            {
                              id: 11,
                              name: 'GST@12%',
                            },
                            {
                              id: 12,
                              name: 'IGST@12%',
                            },
                            {
                              id: 13,
                              name: 'GST@18%',
                            },
                            {
                              id: 14,
                              name: 'IGST@18%',
                            },
                            {
                              id: 15,
                              name: 'GST@28%',
                            },
                          ]}
                          onSelectMenu={(item) =>
                            this.setState({
                              tax: item.name,
                              visiblePicker: false,
                            })
                          }
                          onRequestClose={() =>
                            this.setState({visiblePicker: false})
                          }
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
                  onBlur={() => this.itemNameValidator()}
                  onChangeText={(text) => this.setState({item: text})}
                  placeholder="Enter Product Name"
                />
                <Text style={styles.itemnametext}>
                  {this.state.itemNameError}
                </Text>
                <TextInput
                  label="Description"
                  value={this.state.description}
                  maxLength={25}
                  placeholder="Product Description"
                  onChangeText={(text) => this.setState({description: text})}
                />
                <TextInput
                  label="SAC"
                  keyboardType="numeric"
                  value={this.state.SAC}
                  placeholder="enterSAC"
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

                  {this.state.showprice ? (
                    <View style={styles.stockdropdown}>
                      <TextInput
                        label="SalePrice"
                        // keyboardType="phone-pad"
                        keyboardType="numeric"
                        maxLength={10}
                        value={this.state.salesPrice}
                        placeholder="SalePrice"
                        onChangeText={(text) =>
                          this.setState({
                            salesPrice: text.replace(/[^0-9]/g, ''),
                          })
                        }
                      />

                      <View>
                        <View style={styles.checkbox}>
                          <CheckBox
                            value={this.state.isManualTexEntry}
                            onValueChange={(newValue) =>
                              this.setState({isManualTexEntry: newValue})
                            }
                            tintColors={{true: '#8041E8', false: 'black'}}
                          />
                          <Text style={styles.manualtext}>
                            Manually Enter Tax
                          </Text>
                        </View>
                        <TextInput
                          label="Tax"
                          placeholder="10 days"
                          value={this.state.tax}
                          onChangeText={(tax) => this.setState({tax})}
                          onPress={() => this.setState({visiblePicker: true})}
                          editable={this.state.isManualTexEntry}
                          keyboardType="numeric"
                          renderRightIcon={
                            !this.state.isManualTexEntry && (
                              <Icon name="caretdown" />
                            )
                          }
                        />
                        <CustomPicker
                          title="Select Tax"
                          visible={this.state.visiblePicker}
                          items={[
                            {
                              id: 1,
                              name: '0',
                            },
                            {
                              id: 2,
                              name: 'Non GST',
                            },
                            {
                              id: 3,
                              name: 'GST@0%',
                            },
                            {
                              id: 4,
                              name: 'IGST@0%',
                            },
                            {
                              id: 5,
                              name: 'GST@0.25%',
                            },
                            {
                              id: 6,
                              name: 'IGST@0.25%',
                            },

                            {
                              id: 7,
                              name: 'GST@3%',
                            },
                            {
                              id: 8,
                              name: 'IGST@3%',
                            },
                            {
                              id: 9,
                              name: 'GST@5%',
                            },
                            {
                              id: 10,
                              name: 'IGST@5%',
                            },
                            {
                              id: 11,
                              name: 'GST@12%',
                            },
                            {
                              id: 12,
                              name: 'IGST@12%',
                            },
                            {
                              id: 13,
                              name: 'GST@18%',
                            },
                            {
                              id: 14,
                              name: 'IGST@18%',
                            },
                            {
                              id: 15,
                              name: 'GST@28%',
                            },
                          ]}
                          onSelectMenu={(item) =>
                            this.setState({
                              tax: item.name,
                              visiblePicker: false,
                            })
                          }
                          onRequestClose={() =>
                            this.setState({visiblePicker: false})
                          }
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
  goodsradio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    marginRight: 20,
  },
  goodstext: {
    marginRight: 10,
    fontSize: 18,
  },
  servicetext: {
    marginRight: 10,
    fontSize: 18,
  },
  serviceradio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    marginRight: 10,
  },
  allradio: {
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 18,
    alignSelf: 'center',
  },
  service: {
    marginRight: 30,
  },
  inputwrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  itemnametext: {
    color: 'red',
    bottom: 20,
    left: 12,
  },
  UntHsnwrapper: {
    flexDirection: 'row',
  },
  untwrap: {
    flex: 1,
    marginRight: 10,
  },
  hsnwrap: {
    flex: 1,
    marginLeft: 10,
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
    padding: 20,
    paddingBottom: 1,
    marginTop: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DBDBDB',
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

  manualtext: {
    marginTop: 3,
    fontSize: 16,
  },
  bothtaxtwraper: {flexDirection: 'row', flex: 1},
  checkbox: {
    flexDirection: 'row',
    marginBottom: 18,
    marginLeft: 2,
  },
  taxtextmargin: {marginLeft: 4},
  save: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    //padding: 20,
    backgroundColor: '#8041E8',
  },
  savetext: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 18,
    paddingVertical: 20,
    alignSelf: 'center',
  },
});
{
  /* <TouchableOpacity>
                          <Picker
                            selectedValue={this.state.tax}
                            onValueChange={(itemvalue, indexvalue) =>
                              this.setState({tax: itemvalue})
                            }>
                            <Picker.Item label="select tax" value="" />
                            <Picker.Item label="0" value="0" />
                            <Picker.Item label="Non GST" value="Non GST" />
                            <Picker.Item label="GST@0%" value="GST@0%" />
                            <Picker.Item label="IGST@0%" value="IGST@0%" />
                            <Picker.Item label="GST@0.25%" value="GST@0.25%" />
                            <Picker.Item label="GST@3%" value="GST@3%" />
                            <Picker.Item label="GST@5%" value="GST@5%" />
                            <Picker.Item label="IGST@5%" value="IGST@5%" />
                            <Picker.Item label="GST@12%" value="GST@12%" />
                            <Picker.Item label="IGST@12%" value="IGST@12%" />
                            <Picker.Item label="GST@18%" value="GST@18%" />
                          </Picker>
                        </TouchableOpacity> */
}
