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
import {memo, useEffect} from 'react';
import {marketplaceInstance, nftInstance} from '@utils/web3';
import {Button} from 'react-native';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {RootState} from '@redux/store';
import {setWalletInfo} from '@redux/wallet/walletSlice';
import {randomInt} from 'crypto';
import {
  metadataWalletConnect,
  mintNft,
  projectIdWalletConnect,
} from '@utils/helper';

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
  console.log(wallet);
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
    const tx = await mintNft(wallet.wallet_address);
  };

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {/* <W3mButton />
        <Web3Modal /> */}

        <Button onPress={mintToken} title="Mint token" />
      </QueryClientProvider>
    </WagmiProvider>
  );
};
export default memo(AddScreen);
