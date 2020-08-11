//

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Radio(props) {
  const [status, setstatus] = useState(true);
  return (
    <TouchableOpacity
      onPress={() => {
        setstatus(!status);
      }}
      style={[
        styles.radio,
        {backgroundColor: status ? 'black' : 'transparent'},
      ]}>
      <View />
    </TouchableOpacity>
  );
}
export default Radio;
const styles = StyleSheet.create({
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
});
