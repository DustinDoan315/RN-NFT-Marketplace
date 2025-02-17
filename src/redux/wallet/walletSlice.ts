import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface WalletState {
  wallet_address: string;
  owner_contract_address?: string;
  listNFTs?: number[];
}

const initialState: WalletState = {
  wallet_address: '',
  owner_contract_address: '',
  listNFTs: [],
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletInfo(
      state,
      action: PayloadAction<{wallet_address: string; owner_address?: string}>,
    ) {
      state.wallet_address = action.payload.wallet_address;
      if (action.payload.owner_address) {
        state.owner_contract_address = action.payload.owner_address;
      }
    },

    setListNfts(state, action: PayloadAction<{list: number[]}>) {
      state.listNFTs = action.payload.list;
    },

    clearWallet(state) {
      state.wallet_address = '';
      state.owner_contract_address = '';
    },
  },
});

export const {setWalletInfo, clearWallet, setListNfts} = walletSlice.actions;
export default walletSlice.reducer;
