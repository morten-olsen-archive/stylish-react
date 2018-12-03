import React, { Component } from 'react';
import { Text } from 'react-native';

export interface Props {
  a: string;
}

const Test = ({ a }: Props) => (
  <Text>Test {a}</Text>
)

export default Test;