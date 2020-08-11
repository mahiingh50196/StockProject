import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Header from '../component/Header';

export default class AdjustmentHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockData: [],
      loading: false, // initially loader hide
    };
  }

  componentDidMount() {
    this.stocksData();
  }

  stocksData = () => {
    this.setState({loading: true}); // setting state of the loader to true
    fetch(
      'https://vapor-invoice.herokuapp.com/api/stock/adjustment-history?sellerId=1&itemId=2',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((json) => {
        // console.warn(json.history);
        if (json.status === 'ok') {
          this.setState({stockData: json.history, loading: false});
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({loading: false});
      });
  };
  renderItems = ({item, index}) => {
    return (
      <View style={styles.adjustmentwrapper}>
        <View style={styles.adjustmentdata}>
          <Text>Adjustment Date</Text>
          <Text>{item.date}</Text>
        </View>
        <View style={styles.adjustmentdata}>
          <Text>Adjustment Quantity</Text>
          <Text>
            {parseInt(item.quantity) > 0
              ? `+${item.quantity}`
              : `${item.quantity}`}
          </Text>
        </View>
        <View style={styles.adjustmentdata}>
          <Text>Reason</Text>
          <Text>{item.reason}</Text>
        </View>
      </View>
    );
  };

  render() {
    // console.warn(this.state.stockData);
    return (
      <View style={styles.wrapper}>
        <Header titleHeader="Adjustment History" />

        <View style={styles.mainview}>
          {this.state.loading ? (
            <ActivityIndicator
              animating={this.state.loading}
              color="blue"
              size={50}
              style={styles.indicatorstyle}
            />
          ) : (
            <FlatList
              contentContainerStyle={{paddingBottom: 100}}
              data={this.state.stockData}
              renderItem={this.renderItems}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
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
    marginTop: 15,
  },
  indicatorstyle: {marginTop: '80%'},
  adjustmentwrapper: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 30,
    marginBottom: 25,
    borderColor: '#E5E5E5',
  },
  adjustmentdata: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
});
