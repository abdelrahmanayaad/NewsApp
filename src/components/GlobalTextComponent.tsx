import React from 'react';
import {Text, TextProps} from 'react-native';

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
