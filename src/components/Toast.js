import React, { useState } from 'react'
import { Toast} from 'react-bootstrap'
import {EyeIcon} from '@heroicons/react/24/solid'
import './Toast.css'
export default function ToastComponent({correctAnswer}) {
    // const {id} = correctAnswer;
    console.log(correctAnswer.correctAnswer)
  const [showToast, setToast] = useState(false)
  return (
    <div>
    
      <Toast
        onClose={() => setToast(false)}
        autohide
        show={showToast}
        delay={2200}
      >
        <Toast.Header>
          <strong className="mr-auto">Correct Answer</strong>
          
        </Toast.Header>
        <Toast.Body>{correctAnswer.correctAnswer}</Toast.Body>
      </Toast>
      <EyeIcon  onClick={() => setToast(true)} className="eye"></EyeIcon>
    </div>
  )
}