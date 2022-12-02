import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizQuestions = () => {
    const [selected, setSelected] = useState('yes');

    const quiz = useLoaderData();

    console.log(quiz);
    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
    };



    // console.log(quiz);


    return (
        <div className='card rounded card-compact bg-violet-200 mt-10 m-10'>
            <br />
            <p className='sm:mx-10 font-bold text-center text-3xl'>Quiz of {quiz.data.name}</p>
            <br />
            <div>
                {
                    quiz.data.questions.map((question, i) => <div
                        id={question.id}>
                        <h3 className='text-lg font-bold p-5'>Quiz {i + 1}.
                            {question.question}</h3>
                        <div className='md:mx-8 xl:mx-72'>
                            <div className='justify-items-center grid grid-cols-1 md:grid-cols-2'>
                                {question.options.map(option => <div className='mt-5 bg-orange-50 w-80 h-24 border rounded p-5'><input onChange={handleChange}
                                    type="radio"
                                    id={option}
                                    value={option}
                                    checked={selected === option}

                                />
                                    <label htmlFor={option}> {option}</label></div>)}
                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default QuizQuestions;