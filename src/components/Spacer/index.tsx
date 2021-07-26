import React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  size: number | string;
  direction?: 'horizontal' | 'vertical';
}

const Spacer = ({size, direction}: SpacerProps) => {
  return (
    <View
      style={{
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        ...(direction === 'horizontal' ? {width: size} : {height: size}),
      }}
    />
  );
};

export {Spacer};
