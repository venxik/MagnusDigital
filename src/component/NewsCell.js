import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {allPadding, DeviceWidth, topOrBottom} from '../config/config_layout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const News = (props) => {
  const {
    imageLink,
    title,
    onPressTitle,
    isDelete,
    onPressBookMark,
    description,
    id,
    data
  } = props;
  const navigation = useNavigation();
  return (
    <View style={Styles.container} key={id}>
      <View style={{backgroundColor: 'lightgray', width: DeviceWidth * 0.3}}>
        <Image source={{uri: imageLink || null}} style={Styles.flexOne} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', data)}style={Styles.containerRight}>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: allPadding,
          }}>
          <View style={{flex: 1, paddingRight: allPadding}}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold'}}
              numberOfLines={1}>
              {title}
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              onPress={onPressBookMark}
              name={!isDelete ? 'bookmark-outline' : 'delete-outline'}
              color={!isDelete ? 'black' : 'red'}
              size={24}
            />
          </View>
        </View>
        <Text numberOfLines={4}>{description}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default News;

const Styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    padding: allPadding,
    backgroundColor: 'white',
    marginTop: topOrBottom,
    flexDirection: 'row',
  },
  containerRight: {
    flex: 2,
    marginLeft: allPadding,
  },
  image: {
    width: DeviceWidth * 0.3,
    height: 80,
  },
});
