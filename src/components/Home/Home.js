import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div className='text-center home'>
           <h1>Do you want to check your ability about programming?</h1>
           
           <Link to={'/topics'}><button>Get Started</button></Link>
        </div>
    );
};

export default Home;