import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Details = () => {
    const { title, description, image, completed } = useLoaderData();

    return (
        <div className='px-2 md:px-5 py-10 dark:bg-black'>
            <div className="max-w-2xl overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 bg-gray-800">
                <PhotoProvider
                        speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                    >
                        <PhotoView src={image}>
                            <img style={{ objectFit: 'cover' }}
                                className='rounded-lg w-full h-64 cursor-pointer' src={image} alt="phone" />
                        </PhotoView>
                    </PhotoProvider>

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
                        <h1 className="block mt-2 text-2xl font-semibold transition-colors duration-300 transform text-white" tabIndex="0" role="link">{title}</h1>
                        <p className="mt-2 text-sm text-gray-200">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;