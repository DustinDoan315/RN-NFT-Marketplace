import '@walletconnect/react-native-compat';
import {WagmiProvider} from 'wagmi';
import {mainnet, polygon, arbitrum} from '@wagmi/core/chains';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  W3mButton,
  Web3Modal,
} from '@web3modal/wagmi-react-native';
import {memo, useEffect, useState} from 'react';
import {marketplaceInstance, nftInstance} from '@utils/web3';
import {Button, Text, TextInput, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {RootState} from '@redux/store';
import {setListNfts, setWalletInfo} from '@redux/wallet/walletSlice';

import {
  getTokenByAddress,
  listNftByAddress,
  metadataWalletConnect,
  mintNft,
  projectIdWalletConnect,
  setApprove,
} from '@utils/helper';
import {ethers} from 'ethers';
import {color} from '@theme/index';

const queryClient = new QueryClient();

const chains = [mainnet, polygon, arbitrum] as const;

const projectId = projectIdWalletConnect;

const metadata = metadataWalletConnect;

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  projectId,
  wagmiConfig,
  defaultChain: mainnet,
  enableAnalytics: true,
});

const AddScreen = () => {
  const dispatch = useAppDispatch();
  const wallet = useAppSelector((state: RootState) => state.wallet);
  // console.log(wallet);

  const [tokenId, setTokenId] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    marketplaceInstance &&
      marketplaceInstance.methods
        .owner()
        .call()
        .then((ownerAddress: string) => {
          addWalletInfo(
            '0x70B255CF9827E1E0C9a5cc889D71Beef3E2f6Bb4',
            ownerAddress.toString(),
          );

          getListNFTs('0x70b255cf9827e1e0c9a5cc889d71beef3e2f6bb4');
          console.log('Owner address:', ownerAddress);
        })
        .catch((error: any) => {
          console.error('Error calling owner method:', error);
        });
  }, []);

  const addWalletInfo = (wallet_address: string, owner_address?: string) => {
    dispatch(setWalletInfo({wallet_address, owner_address}));
  };

  const mintToken = async () => {
    // const tx = await mintNft(wallet.wallet_address);
  };

  const getListNFTs = async (wallet_address: string) => {
    const listNFTs = await getTokenByAddress(wallet_address);
    dispatch(setListNfts({list: listNFTs}));
  };

  const listNft = async () => {
    if (!tokenId || !price) {
      setStatus('Token ID and price are required.');
      return;
    }

    try {
      const priceInWei = ethers.utils.parseUnits(price, 'ether').toString();

      await setApprove(wallet.wallet_address, tokenId, wallet.wallet_address);

      await listNftByAddress(tokenId, priceInWei, wallet.wallet_address);

      setStatus('NFT listed successfully!');
    } catch (err: any) {
      console.error('Error listing NFT:', err);
      setStatus(`Err: ${err}`);
    }
  };

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {/* <W3mButton />
        <Web3Modal /> */}

        <View
          style={{
            marginHorizontal: 12,
            marginVertical: 12,
          }}>
          <Button onPress={mintToken} title="Mint Token" />
          <TextInput
            placeholder="Token ID"
            value={tokenId}
            onChangeText={setTokenId}
            style={{borderWidth: 1, padding: 10, marginBottom: 10}}
          />
          <TextInput
            placeholder="Price in ETH"
            value={price}
            onChangeText={setPrice}
            style={{borderWidth: 1, padding: 10, marginBottom: 10}}
          />
          <Button title="List NFT" onPress={listNft} />
          {status ? (
            <Text style={{marginTop: 20, color: color.primaryText}}>
              {status}
            </Text>
          ) : null}
        </View>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
export default memo(AddScreen);
