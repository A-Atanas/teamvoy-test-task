import {ApiResponse} from '../types/types';
import moment from 'moment';

const API_URL =
  'https://newsapi.org/v2/everything?apiKey=1a80f1f835df42febfdc54d7a9e54505';

const fetchArticles = async (
  searchQuery: string = 'bitcoin',
  sortBy: string = 'relevancy',
  from: string = moment().subtract(1, 'month').toISOString(),
  to: string = moment().toISOString(),
): Promise<ApiResponse> => {
  console.log(searchQuery, sortBy, from, to);
  const response = await fetch(
    `${API_URL}&q=${searchQuery}&sortBy=${sortBy}&from=${from}&to=${to}`,
  )
    .then(result => result.json())
    .then(json => {
      console.log(json);
      return json;
    })
    .catch(err => console.log(err));

  return response;
};

export default fetchArticles;
