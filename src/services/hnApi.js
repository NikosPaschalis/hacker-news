import axios from 'axios';
import { selectFields } from '../utils/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

//Get story based on id
export const getStory = async storyId =>{
    const result = await axios.get(`${storyUrl + storyId}.json`).then(({data}) => data && selectFields(data));
    return result;
}
//Get stories ids
export const getStoryIds = async () => {
    const result = await axios.get(newStoriesUrl).then(({data}) => data);
    return result;
}