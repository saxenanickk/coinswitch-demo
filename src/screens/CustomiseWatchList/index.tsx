import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';
import {CryptoItem} from '../../components';
import {updateWatchlist, Crypto} from '../../data/cryptoSlice';
import {RootState, useAppDispatch, useAppSelector} from '../../data/store';

const CustomiseWatchList = () => {
  const screenState = (state: RootState) => state.crypto;
  const state = useAppSelector(screenState);
  const dispatch = useAppDispatch();
  const MemoCryptoItem = useMemo(() => CryptoItem, []);

  const keyExtractor = (item: any): string => {
    return item.id;
  };

  const _renderItem = ({item}: {item: Crypto}) => (
    <MemoCryptoItem
      item={item}
      onToggle={(id: String) => dispatch(updateWatchlist(id))}
    />
  );

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        keyExtractor={keyExtractor}
        data={state?.history}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default CustomiseWatchList;
