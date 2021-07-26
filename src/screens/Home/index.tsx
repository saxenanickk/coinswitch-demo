import React, {useMemo} from 'react';
import {FlatList, Pressable, Text, View, ViewStyle} from 'react-native';
import {Button, Spacer, WatchItem} from '../../components';
import {Crypto} from '../../data/cryptoSlice';
import {RootState, useAppSelector} from '../../data/store';

const Home = (props: any) => {
  const screenState = (state: RootState) => state.crypto;
  const state = useAppSelector(screenState);
  const MemoWatchedItem = useMemo(() => WatchItem, []);

  const _renderItem = ({item}: {item: any}) => <MemoWatchedItem item={item} />;

  const keyExtractor = (item: any): string => {
    return item.id;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          title={'Customise'}
          onPress={() => props?.navigation?.navigate('Customise WatchList')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={{color: '#9590f9', fontSize: 16}}>Your Accounts</Text>
        <Text style={{color: '#ffffff', fontSize: 36}}>$ 36,400</Text>
        <View style={{flexDirection: 'row', paddingVertical: 20}}>
          <Button title={'Buy BTC'} onPress={() => {}} />
          <Spacer size={15} direction={'horizontal'} />
          <Button
            type={'Secondary'}
            title={'Recharge Wallet'}
            onPress={() => {}}
          />
        </View>
      </View>
      <Pressable
        style={{backgroundColor: '#6762df'}}
        android_ripple={{color: '#736df8'}}
        onPress={() => {}}>
        <View style={{padding: 20}}>
          <Text style={{color: '#ffffff'}}>
            INR Deposits are live. Deposit Now.
          </Text>
        </View>
      </Pressable>
      {state.watchlist?.length ? (
        <FlatList
          keyExtractor={keyExtractor}
          data={state?.watchlist}
          renderItem={_renderItem}
        />
      ) : (
        <View
          style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'grey', fontSize: 20}}>Watchlist is empty.</Text>
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  } as ViewStyle,
  header: {
    backgroundColor: '#736df8',
    alignItems: 'flex-end',
    padding: 20,
  } as ViewStyle,
  buttonContainer: {
    backgroundColor: '#736df8',
    paddingVertical: 10,
    paddingHorizontal: 20,
  } as ViewStyle,
  rechargeWallet: {
    backgroundColor: '#736df8',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#ffffff',
  } as ViewStyle,
};

export default Home;
