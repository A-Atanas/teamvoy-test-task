import {FlatList, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {ArticleData} from '../types/types';
import {mainMenuStyles} from '../styles/styles';
import ArticleCard from './ArticleCard';
import Modals from './Modals';
import fetchArticles from '../services/fetchArticles';

const MainMenu = () => {
  let [articles, setArticles] = useState<ArticleData[]>([]);

  const sortOptions = [
    {
      id: '1',
      label: 'Relevancy',
      value: 'relevancy',
    },
    {
      id: '2',
      label: 'Popularity',
      value: 'popularity',
    },
    {
      id: '3',
      label: 'Publication date',
      value: 'publishedAt',
    },
  ];

  const updateArticles = (
    searchQuery: string,
    sortBy: string,
    from: string,
    to: string,
  ) => {
    fetchArticles(
      searchQuery,
      sortOptions.find(option => option.id === sortBy)?.value,
      from,
      to,
    ).then(({articles}) => setArticles(articles));
  };

  useEffect(() => {
    fetchArticles().then(({articles}) => setArticles(articles));
  }, []);

  return (
    <View style={mainMenuStyles.container}>
      <FlatList
        data={articles}
        renderItem={({item}) => <ArticleCard data={item} />}
        keyExtractor={item => moment(item.publishedAt).format('x')}
      />
      <Modals sortOptions={sortOptions} updateArticles={updateArticles} />
    </View>
  );
};

export default MainMenu;
