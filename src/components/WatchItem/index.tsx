import React from 'react';
import {Image, Text, View} from 'react-native';
import {Crypto} from '../../data/cryptoSlice';
import {Spacer} from '../Spacer';
import {styles} from './styles';

interface WatchItemProps {
  item: Crypto;
}

const WatchItem = ({item}: WatchItemProps) => {
  return (
    <View style={{padding: 10}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{}}
            width={50}
            height={50}
            source={{uri: item?.image as any}}
          />
          <Spacer direction={'horizontal'} size={10} />
          <View>
            <Text>{item?.name}</Text>
            <Text>{`${item?.quantity} ${item?.symbol?.toUpperCase()}`}</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text>{item?.quantity}</Text>
          <Text
            style={{
              color: item?.changeStatus === 1 ? '#72dd70' : '#ea5666',
            }}>{`${item?.percentChange}%`}</Text>
        </View>
      </View>
    </View>
  );
};

export {WatchItem};
