import React from "react"
import {
  Linking,
  FlatList,
  View,
  StyleSheet,
  Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../component/Header';
import { topOrBottom } from '../config/config_layout';
import News from '../component/NewsCell';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReadingList } from '../redux/actions/readingList';

const ReadingListScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const {readingList} = useSelector(state => state.reading_list)
  const noData = () => {
    return (
      <View
        style={styles.MainContainer}
      >
        <Text style={{ textAlign: 'center' }}> Sorry, No Data</Text>
      </View>
    )
  }
  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <Header
        headerTitle={"My Reading"}
        onPressLeft={() => navigation.goBack()} />
      <FlatList
        data={readingList.length > 0 && readingList}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: topOrBottom }}
        ListEmptyComponent={noData()}
        renderItem={({ item, index }) => {
          const { title, description, url, urlToImage, book_mark_id } = item
          return (
            <News id={index}
              title={title}
              isDelete
              onPressTitle={() => Linking.openURL(url)}
              onPressBookMark={() => dispatch(deleteReadingList(book_mark_id))}
              description={description}
              imageLink={urlToImage} />
          )
        }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
export default ReadingListScreen
