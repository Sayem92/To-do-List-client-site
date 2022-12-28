import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { title, description, image, completed } = useLoaderData();

    return (
        <div className='px-2 md:px-5 py-10 dark:bg-black'>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-64 rounded-lg" src={image} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                            {
                                completed === 'true' ?
                                    <button
                                        className='px-2 py-3 rounded bg-green-500 text-white'>Completed</button>
                                    :
                                    <button
                                        className='px-2 py-3 rounded bg-red-500 text-white'>Not Completed</button>
                            }
                        </span>
                        <h1 className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white" tabIndex="0" role="link">{title}</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;