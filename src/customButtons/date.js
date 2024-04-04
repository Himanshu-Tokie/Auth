import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default ({ changeState, children }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      {/* {children} */}
      <TextInput
        style={{color:"white"}}
        label="Date of Birth"
        value={formatDate(date)} 
        onPressIn={() => setOpen(true)}
      />
      <DatePicker
        modal
        maximumDate={new Date}
        mode='date'
        open={open}
        date={date}
        onConfirm={(selectedDate) => {
          setOpen(false);
          setDate(selectedDate);
          changeState(formatDate(selectedDate));
        }}
        onCancel={() => {
          setOpen(false);
        }}
        theme='dark'
      />
    </>
  );
};
