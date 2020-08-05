// import React from 'react';
// import {
//   View,
//   Text,
//   Modal,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// const Picker = (props) => (
//   <Modal
//     visible={props.visible}
//     onRequestClose={props.onRequestClose}
//     transparent>
//     <TouchableWithoutFeedback onRequestClose={props.onRequestClose}>
//       <View style={styles.mainview}>
//         <View style={styles.wrapper}>
//           <View style={styles.selectoption}>
//             <Text>{props.title}</Text>
//           </View>
//           <View style={styles.goodsservices}>
//             <TouchableOpacity onPress={() => props.onSelectMenu('goods')}>
//               <Text>goods</Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => props.onSelectMenu('services')}>
//               <Text>services</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   </Modal>
// );

// export default Picker;
// const styles = StyleSheet.create({
//   mainview: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     justifyContent: 'center',
//   },
//   wrapper: {
//     minHeight: 200,
//     backgroundColor: 'white',
//   },
//   selectoption: {
//     borderBottomWidth: 1,
//     padding: 15,
//     borderBottomColor: '#DBDBDB',
//   },
//   goodsservices: {
//     padding: 15,
//   },
// });
import RNPickerSelect from 'react-native-picker-select';

const Dropdown = () => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={[
        {label: 'Football', value: 'football'},
        {label: 'Baseball', value: 'baseball'},
        {label: 'Hockey', value: 'hockey'},
      ]}
    />
  );
};

export default Dropdown;
