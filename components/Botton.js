import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MyButton = () => (
  <TouchableOpacity style={{ padding: 16 }}>
    <Text style={{ color: '#fff', backgroundColor: '#007AFF' }}>Press me</Text>
  </TouchableOpacity>
);

export default MyButton;
