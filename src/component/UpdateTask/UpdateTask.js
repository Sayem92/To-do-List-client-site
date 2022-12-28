import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { RadioGroup } from '@headlessui/react'

const UpdateTask = () => {
    const { title, description, image, _id } = useLoaderData();
    const [loading, setLoading] = useState(false);
    const [img, setImg] = useState(image);
    const [complete, setComplete] = useState('');


    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_IMGBB_key;
    const navigate = useNavigate()

    const handleAddTask = data => {
        // console.log(data.image, data.title, data.description);

        if (data.image.length > 0) {
            setLoading(true)
            const newImage = data.image[0]
            const formData = new FormData();
            formData.append('image', newImage)
            const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
            fetch(url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    if (imgData.success) {
                        const newPic = imgData.data.display_url

                        setLoading(false)
                        const addTask = {
                            title: data.title,
                            image: newPic,
                            description: data.description,
                            completed: complete
                        }

                        fetch(`http://localhost:5000/addTask/${_id}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(addTask)
                        })
                            .then(res => res.json())
                            .then(result => {
                                // console.log(result);
                                toast.success(`${data.title} Task save successful`);
                                navigate('/myTask');
                            })

                    }


                })
        }



        if (loading) {
            return <Loading></Loading>
        }


        if (data.image.length === 0) {
            const addTask = {
                title: data.title,
                image: img,
                description: data.description,
                completed: complete
            }

            fetch(`http://localhost:5000/addTask/${_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(addTask)
            })
                .then(res => res.json())
                .then(result => {
                    // console.log(result);
                    toast.success(`${data.title} Task save successful`);
                    navigate('/myTask');
                })
        }


    };




    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex items-center justify-center min-h-screen px-6 py-16 mx-auto">
                <form onSubmit={handleSubmit(handleAddTask)}
                    className="w-full max-w-md">
                    <h1 className="text-3xl text-center font-semibold text-gray-800 capitalize  dark:text-white">Update Task</h1>


                    <div className="relative flex items-center mt-8">
                        <input type="text"
                            {...register("title", {
                                required: 'title is required'
                            })}
                            defaultValue={title}
                            className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Title" />
                    </div>
                    {errors.title && <p className='text-red-600'>{errors.title?.message}</p>}


                    <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-4 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <h2 className="mx-3 text-gray-400">Upload Image </h2>
                        <input id="dropzone-file" type="file"
                            {...register('image', {
                                required: "Please upload image"
                            })}

                            className="hidden" />

                        {
                            image && <div className="pl-10 w-32 rounded-lg">
                                <img src={image} alt='' />
                            </div>
                        }

                    </label>
                    {errors.image && <p className='text-red-600'>{errors.image.message}</p>}


                    <div className="relative flex items-center mt-4">
                        <textarea type="text"
                            {...register("description", {
                                required: "Description is required"
                            })}
                            defaultValue={description}
                            className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Description" />
                    </div>
                    {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}



                    <RadioGroup value={complete} onChange={setComplete}>
                        <RadioGroup.Option value="true" className='my-5'>
                            {({ checked }) => (
                                <span className={checked ? 'bg-blue-600 px-4 py-2 rounded-l-md' : 'px-4 py-2 rounded-l-md bg-gray-300'}>Completed</span>
                            )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="false" className='my-5'>
                            {({ checked }) => (
                                <span className={checked ? 'bg-blue-600 px-4 py-2 rounded-l-md' : 'px-4 py-2 rounded-l-md bg-gray-300'}>Uncompleted</span>
                            )}
                        </RadioGroup.Option>
                    </RadioGroup>

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Update
                        </button>

                    </div>
                </form>
            </div>
        </section>
    );
}
export default UpdateTask;