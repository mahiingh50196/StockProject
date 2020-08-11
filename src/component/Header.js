import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import {SCREEN_WIDTH} from '../config/Layout';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {Images, Colors} from '../utils';

export default class Header extends Component {
  render() {
    const {showsearch, showedit, showfilter, onPressEdit} = this.props;
    return (
      <View style={styles.wraper}>
        <TouchableOpacity style={styles.backarrow}>
          <Icon name="left" size={20} style={styles.lefticon} />
        </TouchableOpacity>
        <Text style={styles.titleHeadertext}>{this.props.titleHeader}</Text>
        {showsearch ? (
          <TouchableOpacity style={styles.searchicon}>
            <Icon1 name="search" size={20} style={styles.lefticon} />
          </TouchableOpacity>
        ) : null}
        {showfilter ? (
          <View style={styles.searchfilter}>
            <Image source={Images.filter} />
          </View>
        ) : null}
        {showedit ? (
          <TouchableOpacity
            style={styles.showedit}
            onPress={() => onPressEdit()}>
            <Icon2 name="edit" size={28} style={styles.editstyle} />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wraper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  backarrow: {
    paddingHorizontal: 28,
    paddingVertical: 18,
  },
  lefticon: {
    color: '#FFFFFF',
  },
  titleHeadertext: {
    color: '#FFFFFF',
    fontSize: 20,
    width: '48%',
  },
  searchicon: {
    paddingHorizontal: 10,
    paddingVertical: 18,
  },
  lefticon1: {
    color: '#FFFFFF',
  },

  searchfilter: {
    paddingRight: 34,
    paddingLeft: 10,
    paddingVertical: 18,
  },
  showedit: {
    paddingVertical: 18,

    paddingLeft: 62,
  },
  editstyle: {
    color: '#FFFFFF',
  },
});
