import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye } from 'react-icons/fa'

const QuizOptions = ({ questionn }) => {

    const { question, correctAnswer, options } = questionn;
    const [selected, setSelected] = useState();
    const [isCorrect, setIsCorrect] = useState();

    const handleChange = event => {
        console.log(event.target.value);

        setSelected(event.target.value);
        if (selected !== correctAnswer) {
            return toast('X Not Correct')
        }
        else if (selected === correctAnswer) {
            return toast.success('correct answer')
        }


    }
    const handleC = (event) => {

        setIsCorrect(event.target.defaultValue)
        console.log(event.target.defaultValue);
        toast.success(`Correct Answer '${correctAnswer}'`)

        console.log(event.target.value)
    }

    return (
        <div>
            <div className='flex justify-around'>
                <h3 className='text-lg font-bold p-5'>Quiz { }.<span className='text-violet-200 justify-self-center'>..</span>
                    {question.slice(3, -4)}</h3>
                <button className='justify-self-end'>
                    <input onClick={handleC} className="invisible" type="checkbox"
                        id={correctAnswer}
                        value={correctAnswer}

                        checked={isCorrect === { correctAnswer }}

                    />
                    <Toaster />
                    <label htmlFor={correctAnswer}><FaEye></FaEye> </label>
                </button>
            </div>
            <div className='md:mx-8 xl:mx-72'>
                <div className='justify-items-center grid grid-cols-1 md:grid-cols-2'>
                    {options.map(option => <div className='mt-5 bg-orange-50 w-80 h-24 border rounded p-5'><input onChange={handleChange}
                        type="radio"
                        id={option}
                        value={option}
                        checked={selected === option}

                    />
                        <label htmlFor={option}> {option}</label></div>)}
                </div>
            </div>

        </div>
    );
};

export default QuizOptions;