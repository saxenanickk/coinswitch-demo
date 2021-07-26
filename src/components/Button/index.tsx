import React, {ReactChild} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const Button = ({
  type = 'Primary',
  title,
  onPress,
  children,
}: {
  type?: 'Primary' | 'Secondary';
  title?: string;
  onPress: any;
  children?: ReactChild;
}) => {
  const content = () => (
    <>
      <View style={{padding: 10}}>
        <Text style={styles.title(type)}>{title}</Text>
      </View>
      {children}
    </>
  );

  return (
    <>
      {type === 'Primary' ? (
        <Pressable
          style={styles.container(type)}
          android_ripple={{color: '#736df8'}}
          onPress={onPress}>
          {content()}
        </Pressable>
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.container(type)}>
          {content()}
        </TouchableOpacity>
      )}
    </>
  );
};

export {Button};
