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

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'a21f4935aa965b70bd440d5ea8be7fae';

// 2. Create config
const metadata = {
  name: 'AppKit RN',
  description: 'NFT MarketPlace',
  url: 'https://walletconnect.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};

const chains = [mainnet, polygon, arbitrum] as const;

const wagmiConfig = defaultWagmiConfig({chains, projectId, metadata});

// 3. Create modal
createWeb3Modal({
  projectId,
  wagmiConfig,
  defaultChain: mainnet, // Optional
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export default function AddScreen() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <W3mButton />
        <Web3Modal />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
