import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {encrypt} from 'eciesjs';
import {useSDK} from '@metamask/sdk-react';
import packageJSON from '../../../../package.json';
import {color} from '@theme/index';
import {DAPPView} from './DappView';

const AddScreen = () => {
  const {account, chainId} = useSDK();
  const [encryptionTime, setEncryptionTime] = useState<number>();
  const {sdk} = useSDK();

  if (!sdk) {
    // return <Text>SDK loading</Text>;
  }
  const testEncrypt = async () => {
    console.debug('begin encryption test');
    const startTime = Date.now();
    const data =
      '{"type":"originator_info","originatorInfo":{"url":"example.com","title":"React Native Test Dapp","platform":"NonBrowser"}}';
    const other =
      '024368ce46b89ec6b5e8c48357474b2a8e26594d00cd59ff14753f8f0051706016';
    const payload: any = Buffer.from(data);
    const encryptedData = encrypt(other, payload);
    const encryptedString = Buffer.from(encryptedData).toString('base64');
    console.debug('encrypted: ', encryptedString);
    const timeSpent = Date.now() - startTime;
    setEncryptionTime(timeSpent);
    console.debug(`encryption time: ${timeSpent} ms`);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{color: color.primaryText, fontSize: 24, textAlign: 'center'}}>
        reactNativeDemo Mobile Dapp Test ( RN{' '}
        {`v${packageJSON.dependencies['react-native']
          .trim()
          .replaceAll('\n', '')}`}
        )
      </Text>
      <Button title="TestEncrypt" onPress={testEncrypt} />

      <DAPPView />
    </View>
  );
};

export default AddScreen;
