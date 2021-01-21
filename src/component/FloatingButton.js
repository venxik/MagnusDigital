import React from 'react'
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import { DeviceWidth, topOrBottom } from '../config/config_layout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const square = DeviceWidth * 0.13
const FloatingButton = (props) => {
  const { onPress } = props
  return (
    <TouchableOpacity style={Styles.container}
      onPress={onPress}>
      <MaterialCommunityIcons
        name={'bookmark-multiple-outline'}
        size={26} />
    </TouchableOpacity>
  )
}
FloatingButton.propTypes = {
  onPress: PropTypes.func
}
export default FloatingButton
const Styles = StyleSheet.create({
  container: {
    width: square,
    height: square,
    position: 'absolute',
    backgroundColor: 'lightblue',
    elevation: 2,
    bottom: 24,
    right: topOrBottom,
    borderRadius: square,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
