import React, { useEffect, useRef, useState, Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SegmentedControl from '@react-native-community/segmented-control';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { GET_ARTICLES_REQUEST, GET_BANNERS_REQUEST } from '../redux/constants';
import { getArticleState } from '../redux/selectors';

export function Latest() {
  const screenWidth = useWindowDimensions().width;
  const dispatch = useDispatch();
  const carouselRef = useRef<any>(null);
  const { banners, articles } = useSelector(getArticleState);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    dispatch({ type: GET_BANNERS_REQUEST });
    dispatch({ type: GET_ARTICLES_REQUEST });
  }, [dispatch]);

  console.log('banners', banners);
  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={banners.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.pageContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inActiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  return (
    <View style={styles.container}>
      <SegmentedControl
        values={['Articles', 'Discussions']}
        selectedIndex={selectedIndex}
        style={styles.segment}
        fontStyle={styles.font}
        activeFontStyle={styles.activeFont}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <View>
        {selectedIndex === 0 ? (
          <Fragment>
            <Carousel
              ref={carouselRef}
              data={banners}
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
            {renderPagination()}
          </Fragment>
        ) : null}
      </View>
    </View>
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
  name: {
    fontSize: 18,
    marginLeft: 20,
  },
  carouselWrapper: {
    width: '100%',
  },
  bannerImg: {
    width: '100%',
    height: 200,
  },
  pageContainer: {
    backgroundColor: '#F1F3F4',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: '#000000',
  },
  inActiveDot: {
    width: 8,
    height: 8,
    borderRadius: 3,
    marginHorizontal: 4,
    backgroundColor: '#000000',
  },
});
