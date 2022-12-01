import React from 'react';
import { Link } from 'react-router-dom';
import './QuizItem.css'

const QuizItem = ({ quizItem }) => {
    const { id, name, logo, total } = quizItem;
    return (
        <div>

            <div className="card rounded card-compact w-64 bg-base-100 shadow-xl">
                <figure className='bg-slate-200'><img src={logo} alt="Shoes" /></figure>
                <div className="card-body flex items-center justify-between px-2">
                    <div><h2 className="card-title text-left font-bold mt-1">{name}</h2>
                        <p className='text-sm'>Questions: {total}</p></div>
                    <div className="card-actions justify-end">
                        <Link to={`quiz/${id}`}>
                            <button className="btn btn-info text-lg quizbutton">Start Quiz</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizItem;