import React, { useState, useEffect } from 'react';
import {getStoryIds} from '../services/hnApi';
import { Story } from '../components/Story';
import {GlobalStyle, StoriesContainerWrapper} from '../styles/StoriesContainerStyles';

function StoriesContainer() {
  const [storyIds,setStoryIds] = useState([]);

  useEffect(() =>{
    getStoryIds().then(data => setStoryIds(data));
    //getStory(22283486).then(data => console.log(data));
  },[]);
  return (
    <>
    <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News</h1>
        {storyIds.map(storyId => <Story key={storyId}  storyId= {storyId} />)}
      </StoriesContainerWrapper>
    </>
  );
}

export default StoriesContainer;