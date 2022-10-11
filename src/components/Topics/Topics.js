import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'
const Topics = () => {
    const alltopics =useLoaderData()
    const topics = alltopics.data;
  
    return (
        <div>
            <h1 className='text-center select'>Select Your Topics</h1>
            <div className='Topic'>
            {
                topics.map(topic=><Topic key={topic.id} topic={topic}></Topic>)
            }
            </div>
        </div>
    );
};

export default Topics;