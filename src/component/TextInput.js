import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const InputFields = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.inputstyle}>
        <Text style={styles.text}>{props.label}</Text>
        <View style={styles.wrapper}>
          <View style={styles.input}>
            <TextInput
              editable={props.editable}
              placeholderTextColor="#DBDBDB"
              placeholder={props.placeholder}
              style={styles.textinputs}
              value={props.value}
              onChangeText={props.onChangeText}
              keyboardType={props.keyboardType}
              maxLength={props.maxLength}
              onBlur={props.onBlur}
            />
          </View>
          {props.renderRightIcon ? (
            <View style={styles.icon}>{props.renderRightIcon}</View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InputFields;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  inputstyle: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#DBDBDB',
    position: 'relative',
  },
  text: {
    position: 'absolute',
    backgroundColor: 'white',
    color: 'black',
    top: -10,
    left: 15,
    paddingHorizontal: 10,
  },
  textinputs: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {flex: 1},
});
