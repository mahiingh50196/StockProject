import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {SCREEN_WIDTH} from '../../config/Layout';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {Images, Colors} from '../../utils';

export default class Header extends Component {
  render() {
    const {showsearch, showfilter} = this.props;
    return (
      <View style={styles.wraper}>
        <TouchableOpacity style={styles.backarrow}>
          <Icon name="left" size={20} style={styles.lefticon} />
        </TouchableOpacity>
        <View style={styles.headertitle}>
          <Text style={styles.titleHeadertext}>{this.props.titleHeader}</Text>
        </View>
        <View style={styles.gap} />
        {showsearch ? (
          <View style={styles.searchicon}>
            <Icon1 name="search" size={20} style={styles.lefticon} />
          </View>
        ) : null}
        {showfilter ? (
          <View style={styles.searchfilter}>
            <Image source={Images.filter} />
          </View>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wraper: {
    flexDirection: 'row',
    width: SCREEN_WIDTH * 1,
    height: 52,
    backgroundColor: Colors.PRIMARY,
  },
  backarrow: {
    width: SCREEN_WIDTH * 0.2,
    padding: 15,
  },
  lefticon: {
    color: '#FFFFFF',
  },
  headertitle: {
    width: SCREEN_WIDTH * 0.4,
  },
  titleHeadertext: {
    color: '#FFFFFF',
    padding: 10,
    fontSize: 20,
  },
  searchicon: {
    width: SCREEN_WIDTH * 0.3,
    padding: 18,
  },
  lefticon1: {
    color: '#FFFFFF',
  },
  gap: {
    width: 20,
  },
  searchfilter: {
    width: SCREEN_WIDTH * 0.2,
    padding: 18,
    right: 65,
  },
});
