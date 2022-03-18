import React from "react";
import TextField from "./textField";

const Form = ({ onChange, data, onClick }) => {
    
    return (
        <form onSubmit={onClick}>
            <div className="mt-1 flex rounded-md shadow-sm">
                <TextField
                    type="text"
                    name="img"
                    value={data.img}
                    onChange={onChange}
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="ссылка на ваше фото"
                />
                <TextField
                    type="text"
                    name="www"
                    value={data.www}
                    onChange={onChange}
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="url вашего сайта"
                />
                <TextField
                    type="text"
                    name="text"
                    value={data.text}
                    onChange={onChange}
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="ваш ник нейм"
                />
                <button type="submit" className="group relative min-w-200px flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor" 
                            ria-hidden="true">
                        </svg>
                    </span>
                    Load
                </button>
            </div>
        </form>
    );
};

export default Form;
