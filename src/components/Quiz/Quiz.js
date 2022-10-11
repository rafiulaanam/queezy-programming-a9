import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'
const Quiz = () => {
const quizs = useLoaderData()

const questions = quizs.data.questions

    return (
        <div className='Quiz'>
            <h3>Quiz of {quizs.data.name}</h3>

                <div className='gap'>
                {
                    questions.map(question=><Question key={question.id} question={question}></Question>)
                }
                </div>

        </div>
    );
};

export default Quiz;