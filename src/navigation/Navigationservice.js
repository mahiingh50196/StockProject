import React, {Component} from 'react';

import {CreateItem, Stockview, ItemDetails, StockAdjustment} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default class Navigationservice extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Stockview">
          <Stack.Screen
            name="Stockview"
            component={Stockview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ItemDetails"
            component={ItemDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StockAdjustment"
            component={StockAdjustment}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="CreateItem"
            component={CreateItem}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
