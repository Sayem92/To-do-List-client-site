import React from 'react';

const Home = () => {
    return (
        <section>
            <div className="bg-violet-400">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Having a to-do list can make things much easier.</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">To-do List a list of tasks you need to complete or things that you want to do.</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-green-500 text-gray-50">Add Task</button>
                    </div>
                </div>
            </div>
            <img src="https://i.ibb.co/k5TGTcX/getty-941893182-388611.jpg" alt="to-do list" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
        </section>
    );
};

export default Home;