import { useState } from "react";
import images from "../../api/fake_api";

const Slider = (params) => {
    const [image, setImage] = useState(images[0]);

    const changePhoto = () => {
        const index = images.find((elem) => {
            return elem._id !== image._id ? elem : null ;
        });
        setImage(index);
    };
    
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none flex-inline flex items-center">
                <button className="cursor-progress" onClick={changePhoto}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="items-center mx-auto">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>
                            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src={image.img} className="w-full h-full object-center object-cover" />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500 flex items-center">
                                <a href="#">
                                    <span></span>
                                    {image.text}
                                </a>
                            </h3>
                        </div>
                    </div>
                    <button className="cursor-progress" onClick={changePhoto}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;