import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = ({isDatePickerVisible, handleConfirm, hideDatePicker}) => {
  return (
    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
    />
  );
};

export default DatePicker;
