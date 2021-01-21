import React from 'react'
import{
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native'
const LoadingBlocker = () => {
  return(
    <View style={Styles.container}>
      <ActivityIndicator
        style={{flex: 0}}
        size={'large'}
        color={'lightgreen'}
      />
    </View>
  )
}
export default LoadingBlocker
const Styles = StyleSheet.create({
  container:{
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    elevation: 2,
    right: 0,
    left: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
