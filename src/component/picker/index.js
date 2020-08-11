import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

const Picker = (props) => (
  <Modal
    visible={props.visible}
    onRequestClose={props.onRequestClose}
    transparent>
    <TouchableWithoutFeedback onPress={props.onRequestClose}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            minHeight: 200,
            marginHorizontal: 15,
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              padding: 15,
            }}>
            <Text>{props.title}</Text>
          </View>
          <ScrollView contentContainerStyle={{paddingBottom: 40}}>
            <View>
              {props.items.map((item) => (
                <TouchableOpacity
                  style={{padding: 10}}
                  onPress={() => props.onSelectMenu(item)}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              ))}
              {/* <TouchableOpacity
              style={{padding: 15}}
              onPress={() => props.onSelectMenu('services')}>
              <Text>Service</Text>
            </TouchableOpacity> */}
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

export default Picker;
