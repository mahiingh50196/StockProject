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
import {Header} from '../component';
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
        return <Product navigation={props.navigation} data={productsData} />;
      case 'second':
        return <Services navigation={props.navigation} data={servicesData} />;
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
  const Reload = () => {
    props.navigation.navigate('CreateItem', {
      onSucess: () => {
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
      },
    });
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#8041E8',
        width: 120,
        marginHorizontal: 35,
      }}
      style={{backgroundColor: 'white'}}
      activeColor={'#8041E8'}
      inactiveColor={'#B1B1B1'}
      renderLabel={({route, focused, color}) =>
        focused ? (
          <Text style={{color: '#8041E8', fontSize: 15}}>{route.title}</Text>
        ) : (
          <Text style={{color: '#B1B1B1', fontSize: 15}}>{route.title}</Text>
        )
      }
    />
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header titleHeader="Stock/Item" showsearch={true} showfilter={true} />
      {loading ? (
        <ActivityIndicator
          color="#8041E8"
          size={45}
          style={{paddingTop: '80%'}}
        />
      ) : (
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      )}

      <TouchableOpacity onPress={() => Reload()} style={styles.pluswrap}>
        <Text style={styles.plustextstyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pluswrap: {
    //flex: 1,
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: '#8041E8',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
  },
  plustextstyle: {
    color: 'white',
    fontSize: 40,
    marginBottom: 3,
  },
});
