import {icons} from '@assets/index';
import ChatComponent from '@components/ChatComponent';
import Modal from '@components/Modal';
import {authRoot} from '@navigation/NavigationRef';
import router from '@navigation/router';
import {useAppSelector} from '@redux/hooks';
import {RootState} from '@redux/store';
import {color} from '@theme/index';
import socket from '@utils/socket';
import {styles} from '@utils/styles';
import React, {useState, useLayoutEffect, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';

const ChatScreen = () => {
  const user = useAppSelector((state: RootState) => state.user);
  console.log('====================================');
  console.log('user', user);
  console.log('====================================');
  const [visible, setVisible] = useState(false);
  const [rooms, setRooms] = useState([]);

  useLayoutEffect(() => {
    function fetchGroups() {
      fetch('http://localhost:4000/api')
        .then(res => res.json())
        .then(data => setRooms(data))
        .catch(err => console.error(err));
    }
    fetchGroups();
  }, []);

  useEffect(() => {
    socket.on('roomsList', (rooms: any) => {
      setRooms(rooms);
    });
  }, [socket]);

  const handleCreateGroup = () => setVisible(true);

  const handleLogin = () => {
    authRoot.navigate(router.SIGN_IN_SCREEN);
  };

  return (
    <SafeAreaView style={styles.chatscreen}>
      <View style={styles.chattopContainer}>
        <View style={styles.chatheader}>
          <Text style={[styles.chatheading]}>Chats</Text>
          {user?.name && (
            <Pressable onPress={handleCreateGroup}>
              <Image
                resizeMode="contain"
                source={icons.add_bottom_focus}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </Pressable>
          )}
        </View>
      </View>

      {user?.name ? (
        <View style={styles.chatlistContainer}>
          {rooms.length > 0 ? (
            <FlatList
              data={rooms}
              renderItem={({item}) => <ChatComponent item={item} />}
              keyExtractor={(item: any) => item.id.toString()}
            />
          ) : (
            <View style={styles.chatemptyContainer}>
              <Text style={styles.chatemptyText}>No rooms created!</Text>
              <Text>Click the icon above to create a Chat room</Text>
            </View>
          )}
        </View>
      ) : (
        <Pressable
          onPress={handleLogin}
          style={{
            width: 100,
            paddingVertical: 7,
            backgroundColor: color.blue_1,
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: color.real_white,
            }}>
            Sign In
          </Text>
        </Pressable>
      )}
      {visible ? <Modal setVisible={setVisible} /> : ''}
    </SafeAreaView>
  );
};

export default ChatScreen;
