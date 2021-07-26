import React from 'react';
import {Image, Switch, Text, View} from 'react-native';
import {Crypto} from '../../data/cryptoSlice';
import {Spacer} from '../Spacer';
import {styles} from './styles';

interface CryptoItemProps {
  item: Crypto;
  onToggle: (id: String) => void;
}

const CryptoItem = ({item, onToggle}: CryptoItemProps) => {
  return (
    <View style={{padding: 10}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{}}
            width={25}
            height={25}
            source={{uri: item?.image as any}}
          />
          <Spacer direction={'horizontal'} size={10} />
          <Text style={{color: '#524d60', fontWeight: 'bold'}}>
            {item?.name}
          </Text>
        </View>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={item?.inWatch ? '#ffffff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => onToggle(item?.id)}
          value={item?.inWatch}
        />
      </View>
    </View>
  );
};

export {CryptoItem};
