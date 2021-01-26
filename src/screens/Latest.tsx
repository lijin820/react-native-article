import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  FlatList,
  SafeAreaView,
} from 'react-native';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import SegmentedControl from '@react-native-community/segmented-control';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LoadingSpinner } from '../components';
import { GET_ARTICLES_REQUEST, GET_BANNERS_REQUEST } from '../redux/constants';
import { getArticleState } from '../redux/selectors';
import { BannerType } from '../redux/types';

export function Latest() {
  const dispatch = useDispatch();
  const carouselRef = useRef<Carousel<BannerType>>(null);
  const { banners, articles, fetchedBanner } = useSelector(getArticleState);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const screenWidth = useWindowDimensions().width;

  useEffect(() => {
    dispatch({ type: GET_BANNERS_REQUEST });
    dispatch({ type: GET_ARTICLES_REQUEST });
  }, [dispatch]);

  if (!fetchedBanner) {
    return <LoadingSpinner />;
  }

  const fetchMore = () => {
    // Todo: Add Pagination when the real api is integrated
  };

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={banners.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.pageContainer}
        dotContainerStyle={styles.dotContainerStyle}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inActiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControl
        values={['Articles', 'Discussions']}
        selectedIndex={selectedIndex}
        style={styles.segment}
        appearance={'light'}
        fontStyle={styles.font}
        activeFontStyle={styles.activeFont}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <View>
        {selectedIndex === 0 ? (
          <View style={styles.articleWrapper}>
            <View>
              <Carousel
                ref={carouselRef}
                data={banners}
                autoplay
                loop
                autoplayDelay={3000}
                renderItem={({ item, index }: any) => {
                  return (
                    <View key={index} style={styles.carouselWrapper}>
                      <Image
                        source={{ uri: item.ImageUrl }}
                        style={styles.bannerImg}
                      />
                    </View>
                  );
                }}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                onSnapToItem={(index) => setActiveSlide(index)}
              />
              <View style={styles.pageWrapper}>{renderPagination()}</View>
            </View>
            <FlatList
              data={articles}
              contentContainerStyle={styles.list}
              keyExtractor={(item) => item.Id.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.listItem} key={index}>
                  <Image
                    source={{ uri: item.AttachmentUrl }}
                    style={styles.thumbnail}
                  />
                  <View style={styles.textWrapper}>
                    <Text style={styles.category}>{item.SectionName}</Text>
                    <Text style={styles.subject}>{item.Subject}</Text>
                    <Text style={styles.date}>
                      {moment(item.PostDate).format('MMMM DD, YYYY')}
                    </Text>
                  </View>
                </View>
              )}
              onEndReachedThreshold={0.9}
              onEndReached={fetchMore}
            />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  segment: {
    height: 40,
  },
  font: {
    color: 'gray',
  },
  activeFont: {
    color: '#0E0E0E',
  },
  articleWrapper: {
    marginTop: 10,
  },
  carouselWrapper: {
    width: '100%',
  },
  bannerImg: {
    width: '100%',
    height: 200,
  },
  pageWrapper: {
    height: 30,
    marginBottom: 10,
  },
  list: {
    height: 400,
  },
  pageContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#FFFFFF',
  },
  dotContainerStyle: {
    height: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000000',
  },
  inActiveDot: {
    width: 8,
    height: 8,
    borderRadius: 3,
    backgroundColor: '#000000',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    borderBottomWidth: 2,
    borderBottomColor: '#DDE5EB',
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  textWrapper: {
    marginLeft: 20,
  },
  category: {
    fontSize: 15,
    color: '#B2BFCD',
  },
  subject: {
    fontSize: 18,
    color: '#1D2227',
    marginTop: 10,
  },
  date: {
    fontSize: 17,
    color: '#7C8790',
    marginTop: 10,
  },
});
