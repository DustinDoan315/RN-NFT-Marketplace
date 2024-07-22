import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {icons} from '@assets/index';
import {width} from '@utils/response';
import {color} from '@theme/index';
import {formatPrice} from '@utils/helper';

const TotalBalance = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: width - 48,
          alignSelf: 'center',
        }}>
        <ImageBackground
          resizeMode="contain"
          source={icons.balance_bg}
          style={styles.topSection}>
          <View style={styles.topContent}>
            <Text style={styles.topTitle}>Total Balance</Text>
            <Text style={styles.topAmount}>{`${formatPrice(25000.4)}`}</Text>
          </View>
          <View style={styles.walletSection}>
            <Text style={styles.walletText}>My Wallet</Text>
            <Pressable style={styles.walletButton}>
              <Image
                source={icons.arrow_right}
                style={styles.arrow}
                resizeMode="contain"
              />
            </Pressable>
          </View>
        </ImageBackground>
      </View>

      <ImageBackground
        resizeMode="contain"
        source={icons.balance_bg_2}
        style={styles.bottomSection}>
        <View style={styles.bottomContent}>
          <View style={styles.incomeSection}>
            <Image
              resizeMode="contain"
              source={icons.arrow_down}
              style={styles.icon}
            />
            <View>
              <Text style={styles.bottomTitle}>Income</Text>
              <Text style={styles.bottomAmount}>{`${formatPrice(20000)}`}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.outcomeSection}>
            <Image
              resizeMode="contain"
              source={icons.arrow_up}
              style={styles.icon}
            />
            <View>
              <Text style={styles.bottomTitle}>Outcome</Text>
              <Text style={styles.bottomAmount}>{`${formatPrice(17000)}`}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 48,
    paddingVertical: 12,
    backgroundColor: color.white,
  },
  topSection: {
    paddingVertical: 16,
    width: '100%',
    height: 138,
  },
  topContent: {
    paddingHorizontal: 24,
  },
  topTitle: {
    fontSize: 14,
    color: color.white,
  },
  topAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: color.white,
  },
  walletSection: {
    position: 'absolute',
    bottom: 18,
    height: 32,
    right: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  walletText: {
    fontSize: 14,
    color: color.white,
    marginRight: 12,
  },
  walletButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: color.real_white,
  },
  arrow: {
    width: 16,
    height: 16,
  },
  bottomSection: {
    width: '100%',
    height: 66,
    marginTop: 16,
    paddingVertical: 12,
    alignContent: 'center',
  },
  bottomContent: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  incomeSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  bottomTitle: {
    fontSize: 12,
    color: color.white,
  },
  bottomAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.white,
    marginTop: 3,
  },
  divider: {
    width: 1,
    height: '90%',
    alignSelf: 'center',
    backgroundColor: color.real_white,
  },
  outcomeSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TotalBalance;
