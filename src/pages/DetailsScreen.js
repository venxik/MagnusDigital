import React, {useRef} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Linking,
} from 'react-native';
import {
  DeviceHeight,
  horizontal,
  STATUS_BAR_HEIGHT,
  DeviceWidth,
} from '../config/config_layout';
import Header from '../component/Header';
import moment from 'moment';

const IMAGE_HEIGHT = DeviceHeight * 0.3;

const Separator = () => (
  <View
    style={{
      marginHorizontal: horizontal,
      height: 1,
      backgroundColor: 'lightgray',
      marginVertical: 24,
    }}
  />
);

const DetailsScreen = ({navigation, route}) => {
  const {params} = route || {};
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  } = params || {};
  const {name} = source || {};
  console.log('params', params);

  const animatedImage = useRef(new Animated.Value(0)).current;

  const scaleImage = animatedImage.interpolate({
    inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT, IMAGE_HEIGHT + 1],
    outputRange: [2, 1, 0.5, 0.5],
  });

  const translateYImage = animatedImage.interpolate({
    inputRange: [0, IMAGE_HEIGHT, IMAGE_HEIGHT + 1],
    outputRange: [0, IMAGE_HEIGHT * 0.75, IMAGE_HEIGHT * 0.75],
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        headerTitle={'News Detail'}
        onPressLeft={() => navigation.goBack()}
      />
      <Animated.ScrollView
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedImage}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <View style={{flex: 1}}>
          <View style={styles.mainImageContainer}>
            <Animated.Image
              style={[
                styles.mainImage,
                {
                  transform: [
                    {translateY: translateYImage},
                    {scale: scaleImage},
                  ],
                },
              ]}
              resizeMode="cover"
              source={{
                uri: urlToImage,
              }}
            />
          </View>
          <View style={{marginHorizontal: horizontal}}>
            <Text style={styles.title}>{title}</Text>
            <View style={{marginVertical: 10}}>
              <Text style={styles.author}>{`By ${author}`}</Text>
              <Text style={styles.author}>{`${moment(publishedAt).format(
                'DD-MM-YYYY',
              )}`}</Text>
            </View>
            <Text>{description}</Text>
          </View>
          <Separator />
          <Text
            style={{
              marginHorizontal: horizontal,
              fontSize: 18,
              textAlign: 'justify',
            }}>
            {`${content}${content} By ${author}`}
          </Text>
          <Text
            style={{
              marginHorizontal: horizontal,
              fontSize: 18,
              textAlign: 'justify',
            }}>
            {`${content}${content} By ${author}`}
          </Text>
          <TouchableOpacity
            style={styles.goToWebsite}
            onPress={() => {
              Linking.openURL(url);
            }}>
            <Text style={styles.goToWebsiteText}>Click this to read more</Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT,
  },
  mainImage: {
    width: '140%',
    height: IMAGE_HEIGHT,
  },
  mainImageContainer: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 24,
    fontSize: 24,
    fontWeight: 'bold',
  },
  author: {
    color: 'rgba(0,0,0, 0.5)',
    fontSize: 14,
  },
  goToWebsite: {
    marginHorizontal: horizontal,
    paddingVertical: 16,
    marginTop: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 12,
  },
  goToWebsiteText: {
    fontWeight: 'bold',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default DetailsScreen;
