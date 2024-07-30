import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, TextInput, Text, FlatList, Pressable} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '@utils/styles';
import MessageComponent from '@components/MessageComponent';
import socket from '@utils/socket';
import {color} from '@theme/index';
import HeaderTitle from '@components/HeaderTitle';
import {useAppSelector} from '@redux/hooks';
import {RootState} from '@redux/store';

const Messaging = ({route}: any) => {
  const user = useAppSelector((state: RootState) => state.user);

  const {id} = route.params;
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [message, setMessage] = useState('');

  const handleNewMessage = () => {
    const hour =
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : `${new Date().getHours()}`;

    const mins =
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`;

    if (true) {
      socket.emit('newMessage', {
        message,
        room_id: id,
        user: user?.name,
        timestamp: {hour, mins},
      });
    }
  };

  useLayoutEffect(() => {
    socket.emit('findRoom', id);
    socket.on('foundRoom', (roomChats: any) => setChatMessages(roomChats));
  }, []);

  useEffect(() => {
    socket.on('foundRoom', (roomChats: any) => setChatMessages(roomChats));
  }, [socket]);

  return (
    <View style={styles.messagingscreen}>
      <HeaderTitle />

      <View
        style={[
          styles.messagingscreen,
          {paddingVertical: 15, paddingHorizontal: 10},
        ]}>
        {chatMessages[0] ? (
          <FlatList
            data={chatMessages}
            renderItem={({item, index}: any) => {
              const showAvatar =
                index === 0 || chatMessages[index - 1]?.user !== item?.user;
              return (
                <MessageComponent
                  showAvatar={showAvatar}
                  item={item}
                  user={user?.name}
                />
              );
            }}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          ''
        )}
      </View>

      <View style={styles.messaginginputContainer}>
        <TextInput
          style={styles.messaginginput}
          onChangeText={value => setMessage(value)}
        />
        <Pressable
          style={styles.messagingbuttonContainer}
          onPress={handleNewMessage}>
          <View>
            <Text style={{color: '#f2f0f1', fontSize: 20}}>SEND</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Messaging;
