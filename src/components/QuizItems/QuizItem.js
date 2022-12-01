import React from 'react';

const QuizItem = ({ quizItem }) => {
    const { name, logo, total } = quizItem;
    return (
        <div>
            <p>
                {name}
            </p>
        </div>
    );
};

export default QuizItem;