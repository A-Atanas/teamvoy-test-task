import React from 'react';
import {Image, Text, View, Linking, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ArticleScreenProps} from '../types/types';
import {articlePage} from '../styles/styles';
import moment from 'moment';

const ArticleScreen = () => {
  const {
    params: {
      data: {author, source, publishedAt, description, title, url, urlToImage},
    },
  } = useRoute<ArticleScreenProps['route']>();

  return (
    <View style={articlePage.page}>
      <Text style={articlePage.title}>{title}</Text>
      <View style={articlePage.generalInfoAndImage}>
        <Image
          style={articlePage.image}
          source={{
            uri: `${urlToImage}` ?? require('../assets/invalid-image.png'),
          }}
          resizeMethod="resize"
          resizeMode="contain"
        />
        <View>
          <Text>Author: {author}</Text>
          <Text>
            Source:{' '}
            <TouchableOpacity>
              <Text
                style={articlePage.sourceLink}
                onPress={() => Linking.openURL(url)}>
                {source.name}
              </Text>
            </TouchableOpacity>
          </Text>
          <Text>
            Published: {moment(publishedAt).format('MMMM Do, YYYY, HH:mm:ss')}
          </Text>
        </View>
      </View>
      <Text numberOfLines={3}>{description}</Text>
    </View>
  );
};

export default ArticleScreen;
