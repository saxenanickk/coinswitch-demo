import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Crypto = {
  name: String;
  id: String;
  symbol: String;
  image: String;
  quantity: String;
  inWatch: boolean;
  percentChange: number;
  changeStatus: number;
};

export type CryptoState = {
  history: Crypto[];
  watchlist: Crypto[];
  loading: boolean;
};

const initialState: CryptoState = {
  history: [],
  watchlist: [],
  loading: false,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: initialState,
  reducers: {
    loadWatchlistData: (state, action: PayloadAction<Crypto[]>) => {
      state.watchlist = action.payload;
    },
    loadCryptoData: (state, action: PayloadAction<Crypto[]>) => {
      state.history = action.payload;
    },
    updateWatchlist: (state, action: PayloadAction<String>) => {
      const itemIndex = state.history.findIndex(
        item => item.id == action.payload,
      );
      let newArray = [...state.history];
      newArray[itemIndex] = {
        ...newArray[itemIndex],
        inWatch: !newArray[itemIndex].inWatch,
      };

      state.history = newArray;

      const watchItemIndex = state.watchlist.findIndex(
        item => item.id == action.payload,
      );

      if (watchItemIndex > -1) {
        let tempWatchlist = [...state.watchlist];
        tempWatchlist.splice(watchItemIndex, 1);

        state.watchlist = tempWatchlist;
      } else {
        state.watchlist.push(newArray[itemIndex]);
      }

      AsyncStorage.setItem('@cryptolist', JSON.stringify(state.history));
      AsyncStorage.setItem('@watchlist', JSON.stringify(state.watchlist));
    },
  },
});

export const {loadWatchlistData, loadCryptoData, updateWatchlist} =
  cryptoSlice.actions;
export default cryptoSlice.reducer;
