import React from 'react';
import {horizontal, toolBarHeight} from '../config/config_layout';
import {View, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = (props) => {
  const {onPressLeft, headerTitle} = props;
  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        {onPressLeft && (
          <MaterialCommunityIcons
            onPress={onPressLeft}
            name={'arrow-left'}
            size={24}
          />
        )}
      </View>
      <View style={Styles.centerContainer}>
        <Text style={Styles.title}>{headerTitle}</Text>
      </View>
      <View />
    </View>
  );
};

export default Header;

const Styles = StyleSheet.create({
  container: {
    height: toolBarHeight,
    paddingHorizontal: horizontal,
    backgroundColor: 'white',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  leftContainer: {position: 'absolute', left: 15},
  centerContainer: {width: '70%', alignItems: 'center', paddingVertical: 2},
  rightContainer: {position: 'absolute', right: 15},
});
