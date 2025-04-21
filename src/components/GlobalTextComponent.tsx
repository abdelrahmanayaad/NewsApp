import React from 'react';
import {StyleSheet, Text, TextProps, View} from 'react-native';

type GlobalTextComponentProps = {
  text?: string;
};

const GlobalTextComponent = ({
  text,
  children,
  ...props
}: GlobalTextComponentProps & TextProps) => {
  return (
    <Text {...props}>
      {children}
      {text}
    </Text>
  );
};

export default GlobalTextComponent;

const styles = StyleSheet.create({});
