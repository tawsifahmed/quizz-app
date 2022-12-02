import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Statistics = () => {

    const quizStats = useLoaderData();



    return (
        <div className='mt-5 pt-5 pe-2'>
            <p className='text-center text-3xl underline font-semibold mt-5 mb-5'>Quiz Statistics</p>
            <div className='css1'>
                <ResponsiveContainer width="96%" height={400}>
                    <LineChart width={400} height={300} data={quizStats.data}>
                        <Line type="monotone" dataKey="total" stroke="#083ba9" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <p>(Responsive Contaienr with set to'96%' to make it responsive)</p>
            </div>
        </div>
    );
};

export default Statistics;