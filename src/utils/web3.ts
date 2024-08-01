import Web3 from 'web3';
import marketABI from './marketABI.json';
import nftABI from './nftABI.json';

const marketAddress = '0xFcE4C8E5bB9C53ea9a77D569A86faf564BCe0dC6';
const nftAddress = '0x154028C2758a2415e3C9198fE4cb709C5E79d393';

// Use MetaMask's provider
const web3 = new Web3(
  Web3.givenProvider ||
    'https://sepolia.infura.io/v3/2b3b923ad44a4738ba5aa8e2bb5f7463',
);

let marketplaceInstance: any;
let nftInstance: any;
try {
  marketplaceInstance = new web3.eth.Contract(marketABI.abi, marketAddress);
  nftInstance = new web3.eth.Contract(nftABI.abi, nftAddress);
  console.log('Contract instance created successfully');
} catch (error) {
  console.error('Error creating contract instance:', error);
}

export {marketplaceInstance, nftInstance};
