import React from 'react';
import ToastComponent from '../Toast';
import './Question.css'
const Question = (props) => {
 const {question,options} = props.question;
// console.log(props)
    return (
        <div className='question'>
            <div>
            <div className='queye'>
            
            <ToastComponent key={props.question.id} correctAnswer={props.question}></ToastComponent>
            </div>
           <div className='option'>
           {
                options.map(option=> <p><input type="radio" name='option' /> {option}</p>)
            }
           </div>
            </div>
            
        </div>
    );
};

export default Question;