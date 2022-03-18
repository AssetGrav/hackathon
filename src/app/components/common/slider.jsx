import React, { useEffect, useState } from "react";
import _ from "lodash";
import Form from "./form";
import { addImages, imagesFromLocal, imageDefault } from "../../api/fake_api";
import httpService from "../../services/http.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Slider = () => {
    const [imagesArr, setImagesArr] = useState();
    
    useEffect(() => {
        imagesFromLocal().then((data) => setImagesArr(data) );
    },[]);
    const [image, setImage] = useState(imageDefault);
    const newPicture =
        {
            _id: Number(_.uniqueId(Math.round(Math.random() * 100000))),
            img: "",
            text: "",
            www: ""
        };
    const [data, setData] = useState(newPicture);
    
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        checkData(data.img).then((resp) => {
            if (resp !== "Network Error") {
                addImages(data).then((data) =>setImagesArr(data));
            }
        });
        setData(newPicture);
    };
    async function checkData(url) {
        try {
            const { data } = await httpService.get(url);
            return data;
        } catch (error) {
            toast.error("Проверьте URL картинки");
            return error.message;
        }
    }
    
    const changePhoto = async () => {
        const index = imagesArr.findIndex((elem) => {
            return elem === image;
        });
        if (imagesArr.length !== index + 1) {
            await setImage(imagesArr[index + 1]);
        } else if (imagesArr.length === index + 1) {
            await setImage(imagesArr[0]);
        };
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
                                <img src={image.img} className="w-full h-full object-center object-cover"/>
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500 flex items-center">
                                <a href={image.www}>
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
                <p>Добавьте свою картинку, сайт и Ваше имя</p>
                <Form onChange={handleChange} data={data} onClick={handleSubmit} />
                <ToastContainer />
            </div>
        </div>
    );
};

export default Slider;
