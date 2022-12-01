import React from 'react';
import './Home.css'
import banner from '../assets/banner.jpg'
import { useLoaderData } from 'react-router-dom';
import QuizItem from '../QuizItems/QuizItem';

const Home = () => {
    const quizItems = useLoaderData();

    console.log(quizItems);

    return (
        <div className='m-10'>
            <br />
            <div className="hero mx-11" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-white">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1 className="mb-5 mt-2 text-5xl font-bold">Welcome to Quizzify</h1>

                        <h1 className='text-3xl'>Select a category and test your knowledge</h1>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h2 className='text-4xl  mt-5'>Choose a Quiz Type</h2>
            <br />
            <hr className='mx-10' />
            <br />
            <div className='mx-11'>
                <div className=' justify-items-center grid gap-2 grid-cols-1 md:grid-cols-2 lg:gap-5 lg:grid-cols-3 xl:grid-cols-4'>

                    {
                        quizItems.data.map(quizItem => <QuizItem
                            key={quizItems.data.id}
                            quizItem={quizItem}
                        >

                        </QuizItem>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;