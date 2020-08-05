import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
//import StockItem from './StockItem';
import Header from '../component/Header';
import Product from './Product';
import Services from './Services';

const initialLayout = {width: Dimensions.get('window').width};

export default function TabViewExample(props) {
  const [index, setIndex] = React.useState(0);
  const [StockData, setStockData] = React.useState([]);
  const [loading, setloading] = React.useState(true);
  const [routes] = React.useState([
    {key: 'first', title: 'Product'},
    {key: 'second', title: 'Services'},
  ]);

  const renderScene = ({route}) => {
    const productsData = StockData.filter((item) => item.type === 'goods');
    const servicesData = StockData.filter((item) => item.type === 'services');
    switch (route.key) {
      case 'first':
        return <Product data={productsData} />;
      case 'second':
        return <Services data={servicesData} />;
      default:
        return null;
    }
  };

  React.useEffect(() => {
    fetch(
      'https://vapor-invoice.herokuapp.com/api/invoice/get-all-stock?sellerId=1',
      {
        method: 'get',
      },
    )
      .then((response) => response.json())
      .then((json) => {
        //console.warn(json.stock);
        setStockData(json.stock);
        setloading(false);
      })
      .catch((error) => {
        console.error(error);
        setloading(false);
      });
  }, []);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#8041E8'}}
      style={{backgroundColor: 'grey'}}
    />
  );

  return (
    <>
      <Header titleHeader="Stock/Item" showsearch={true} showfilter={true} />
      {loading ? (
        <ActivityIndicator color="red" size={45} style={{paddingTop: '50%'}} />
      ) : (
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      )}
      <View style={{marginBottom: 100}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('CreateItem')}
          style={styles.pluswrap}>
          <Text style={styles.plustextstyle}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pluswrap: {
    //flex: 1,
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: '#8041E8',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
    bottom: -100,
  },
  plustextstyle: {
    color: 'white',
    fontSize: 60,
  },
});
