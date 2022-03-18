import React, { useEffect, useState } from "react";

const TextField = ({ onChange, value, type, name, placeholder, error}) => {
    const [inputFile, setInputFile] = useState();
   
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    useEffect(() => {
        setInputFile();
    }, [inputFile]);
    
    return (
        <div className="mt-1 flex rounded-md shadow-sm">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700"></label>
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">ссылка </span>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextField;
