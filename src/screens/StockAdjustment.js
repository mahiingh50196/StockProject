import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {Header, TextInput} from '../component';
import DatePicker from '../component/DatePicker';
import {APIUrl} from '../utils';

export default class Stockadjustment extends Component {
  state = {
    date: moment().format('DD/MM/YYYY'),
    quantity: '',
    reason: '',
    isDatePickerVisible: false,
    sellerId: 1,
  };

  submit = () => {
    const {route} = this.props;
    fetch(APIUrl + 'stock/adjust-stock', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sellerId: this.state.sellerId,
        itemId: route.params.itemData.id,
        date: this.state.date,
        quantity: this.state.quantity,
        reason: this.state.reason,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  };

  render() {
    // console.log(this.state.date, 'date-<>');
    return (
      <View style={styles.mainview}>
        <Header titleHeader="Adjust Stock" />
        <View style={styles.stockview}>
          <View>
            <Text style={styles.shoestext}></Text>
          </View>
          <View>
            <Text style={styles.instock}>In Stock</Text>
            <Text style={styles.units}>
              400<Text>Units</Text>
            </Text>
          </View>
        </View>
        <View style={styles.inputwrapper}>
          <TextInput
            label="Adjustment Date"
            placeholder="Date"
            value={this.state.date}
            editable={false}
            onPress={() => this.setState({isDatePickerVisible: true})}
          />
          <TextInput
            label="Adjust Stock"
            value={this.state.quantity}
            keyboardType="numeric"
            onChangeText={(text) =>
              this.setState({quantity: text.replace(/[^0-9]/g, '')})
            }
          />
          <TextInput
            label="Internal Note"
            placeholder="Any notes?"
            value={this.state.reason}
            onChangeText={(text) => this.setState({reason: text})}
          />
        </View>

        <TouchableOpacity style={styles.savewrap} onPress={this.submit}>
          <Text style={styles.textsave}>Save</Text>
        </TouchableOpacity>

        <DatePicker
          isDatePickerVisible={this.state.isDatePickerVisible}
          handleConfirm={(date) =>
            this.setState({date: moment(date).format('DD/MM/YYYY')})
          }
          onCancel={() => this.setState({isDatePickerVisible: false})}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
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

// {JSON.stringify(this.props.route.params.itemData)}
