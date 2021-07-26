import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {loadCryptoData, loadWatchlistData} from '../data/cryptoSlice';
import {useAppDispatch} from '../data/store';
import Home from '../screens/Home';
import CustomiseWatchList from '../screens/CustomiseWatchList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cryptoData = require('../data/response.json');

const Stack = createStackNavigator();

const Root = () => {
  const dispatch = useAppDispatch();

  const fetchWatchListData = () => {
    AsyncStorage.getItem('@watchlist')
      .then(value => {
        console.log(value);
        if (value != null) {
          dispatch(loadWatchlistData(JSON.parse(value)));
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  const fetchCryptoListData = () => {
    AsyncStorage.getItem('@cryptolist')
      .then(value => {
        console.log(value);
        if (value != null) {
          dispatch(loadCryptoData(JSON.parse(value)));
        } else {
          throw new Error('No data in async storage');
        }
      })
      .catch(e => {
        console.log(e);
        const formattedCryptoData = cryptoData?.map((item: any) => {
          const temp = {
            name: item?.name,
            id: item?.id,
            symbol: item?.symbol,
            image: item?.image,
            quantity: item?.current_price,
            inWatch: false,
            percentChange: Math.abs(item?.price_change_percentage_24h),
            changeStatus: item?.price_change_percentage_24h > 0 ? 1 : 0,
          };
          return temp;
        });

        dispatch(loadCryptoData(formattedCryptoData));
      });
  };

  useEffect(() => {
    fetchWatchListData();
    fetchCryptoListData();
  }, []);

  const screenOptions = {
    gestureEnabled: true,
    headerStyle: {
      backgroundColor: '#736df8',
    },
    headerTintColor: '#ffffff',
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#736df8'} barStyle={'light-content'} />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Customise WatchList"
          component={CustomiseWatchList}
          options={{headerTitle: 'Customise Watchlist'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Root};
