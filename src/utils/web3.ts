import Web3 from 'web3';
import contractABI from './ContractABI.json';

const contractAddress = '0xFcE4C8E5bB9C53ea9a77D569A86faf564BCe0dC6';

const provider = new Web3.providers.HttpProvider(
  'https://sepolia.infura.io/v3/2b3b923ad44a4738ba5aa8e2bb5f7463',
);

const web3 = new Web3(provider);

let contractInstance: any;

try {
  contractInstance = new web3.eth.Contract(
    contractABI.abi as any,
    contractAddress,
  ) as unknown as any;
  console.log('Contract instance created successfully');
} catch (error) {
  console.error('Error creating contract instance:', error);
}

export {contractInstance};
