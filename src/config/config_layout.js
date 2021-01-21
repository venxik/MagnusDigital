import {
  Dimensions,
  Platform,
} from 'react-native';

const horizontal = 12
const vertical = 6
const topOrBottom = 12
const allPadding = 8

const {
  width: DeviceWidth,
  height: DeviceHeight
} = Dimensions.get('window')

//get proper toolbar height
const ios = Platform.OS === 'ios';
const isIphoneX = ios && (DeviceHeight === 812 || DeviceWidth === 812);
const iphoneXTopInset = 24;
const initToolbarHeight = ios ? 40 : 56;
const paddingTop = ios ? 18 : 0;
const topInset =  isIphoneX ? iphoneXTopInset : 0;
const toolBarHeight = initToolbarHeight + topInset + paddingTop

export {
  ios,
  horizontal,
  vertical,
  allPadding,
  topOrBottom,
  toolBarHeight,
  DeviceWidth,
  DeviceHeight
}
