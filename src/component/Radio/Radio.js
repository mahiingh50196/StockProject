//

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Radio(props) {
  const [status, setstatus] = useState(true);
  return (
    <View style={styles.allradio}>
      <View>
        <TouchableOpacity
          onPress={() => {
            setstatus(!status);
          }}
          style={[
            styles.radio,
            {backgroundColor: status ? 'black' : 'transparent'},
          ]}
        />
      </View>
      <View style={{marginLeft: 10}}>
        <Text>Goods</Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            setstatus(!status);
          }}
          style={[
            styles.radio,
            {
              backgroundColor: !status ? 'black' : 'transparent',
              marginLeft: 10,
            },
          ]}
        />
      </View>
      <View style={{marginLeft: 10}}>
        <Text>Services</Text>
      </View>
    </View>
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
