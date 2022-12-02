import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import QuizOptions from '../QuizOptions/QuizOptions';

const QuizQuestions = () => {


    const quiz = useLoaderData();

    console.log(quiz);



    // console.log(quiz);


    return (
        <div className='card rounded card-compact bg-violet-200 mt-10 m-10'>
            <br />
            <p className='sm:mx-10 font-bold text-center text-3xl'>Quiz of {quiz.data.name}</p>
            <br />
            <div>
                {
                    quiz.data.questions.map((questionn, i) => <QuizOptions
                        questionn={questionn}
                        id={questionn.id}
                        ii={i}
                    ></QuizOptions>)
                }
            </div>

        </div >
    );
};

export default QuizQuestions;