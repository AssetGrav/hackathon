import React, { useState } from "react";
import { BookmarkAltIcon } from "@heroicons/react/outline";
import ProgressBar from "../common/progressBar";
import PropTypes from "prop-types";

const badgeSrc = "https://miro.medium.com/max/400/1*5AJzL3uXsKGU-R-LyTJNeA.png";

const UserProfile = ({ match, users }) => {
    const userId = match.params.id;

    let favoriteUserIds = localStorage.getItem("favoriteUserIds");
    favoriteUserIds = favoriteUserIds ? JSON.parse(favoriteUserIds) : [];

    let [userIsFavoriteButtonSettings, setUserIsFavoriteButtonColor] = useState(
        favoriteUserIds.includes(userId)
            ? {
                  color: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                  text: "Remove from Favorite"
              }
            : {
                  color: "bg-gradient-to-r from-cyan-500 to-blue-500",
                  text: "Add to Favorite"
              }
    );

    const getUserById = (id) => {
        return users.find((user) => user._id === id);
    };

    const userData = getUserById(userId);

    const toggleUserIsFavorite = () => {
        if (favoriteUserIds.includes(userId)) {
            favoriteUserIds = favoriteUserIds.filter((id) => id !== userId);
            setUserIsFavoriteButtonColor({
                color: "bg-gradient-to-r from-cyan-500 to-blue-500",
                text: "Add to Favorite"
            });
        } else {
            favoriteUserIds.push(userId);
            setUserIsFavoriteButtonColor({
                color: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                text: "Remove from Favorite"
            });
        }

        localStorage.setItem(
            "favoriteUserIds",
            JSON.stringify(favoriteUserIds)
        );
    };

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* User Section */}

                {userData ? (
                    <>
                        {/* Nav Section */}
                        <nav aria-label="Breadcrumb">
                            <ol
                                role="list"
                                className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
                            >
                                <li key={userData._id}>
                                    <div className="flex items-center">
                                        <a
                                            href="./"
                                            className="mr-2 text-sm font-medium text-gray-900"
                                        >
                                            Home
                                        </a>
                                        <svg
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="w-4 h-5 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="text-sm">
                                    <a
                                        aria-current="page"
                                        className="font-medium text-gray-500 hover:text-gray-600"
                                    >
                                        {userData.name}
                                    </a>
                                </li>
                            </ol>
                        </nav>
                        {/* Image */}
                        <div className="flex justify-center ...">
                            <div className="mt-8 ">
                                <img
                                    src={userData.picUrl}
                                    alt={userData.name}
                                    className="w-full h-full object-center object-cover h-36 rounded-full flex bg-teal-400 m-0 shadow"
                                />
                            </div>
                        </div>

                        {/* Product info */}
                        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                    {userData.name}
                                </h1>
                            </div>

                            {/* Options */}
                            <div className="mt-4 lg:mt-0 lg:row-span-3">
                                <h2 className="sr-only">Information</h2>
                                <p className="text-3xl text-gray-900"></p>

                                {/* Reviews */}
                                <div className="mt-6">
                                    <h3 className="text-sm text-gray-900 font-medium mb-2">
                                        Skills
                                    </h3>
                                    {userData.progress.map((course) => (
                                        <ProgressBar
                                            key={course.name}
                                            label={course.name}
                                            progressValue={course.value}
                                        />
                                    ))}
                                </div>

                                <form className="mt-10">
                                    {userData.badge === true ? (
                                        <>
                                            {/* Badge */}
                                            <div>
                                                <h3 className="text-sm text-gray-900 font-medium">
                                                    Badge
                                                </h3>
                                                <img
                                                    src={badgeSrc}
                                                    alt="This user is a TEAMLEAD"
                                                    className="object-center object-cover h-20 flex bg-white m-0"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        ""
                                    )}

                                    {/* Sizes */}
                                    <div className="mt-10">
                                        {/* Badge */}
                                        <div>
                                            <h3 className="text-sm text-gray-900 font-medium">
                                                Age
                                            </h3>
                                        </div>
                                        <div>
                                            <h3 className="text-lg text-gray-900 font-medium">
                                                {userData.age}
                                            </h3>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className={`mt-10 w-full border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white ${userIsFavoriteButtonSettings.color} focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                        onClick={toggleUserIsFavorite}
                                    >
                                        <BookmarkAltIcon
                                            className="flex-shrink-0 h-6 w-6 text-white-400 mr-2"
                                            aria-hidden="true"
                                        />
                                        {userIsFavoriteButtonSettings.text}
                                    </button>
                                </form>
                            </div>

                            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                {/* Description and details */}
                                <div>
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900">
                                            {userData.about}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        Responsobilities
                                    </h3>

                                    <div className="mt-4">
                                        <ul
                                            role="list"
                                            className="pl-4 list-disc text-sm space-y-2"
                                        >
                                            {userData.responsobilities
                                                ? userData.responsobilities.map(
                                                      (highlight) => (
                                                          <li
                                                              key={highlight}
                                                              className="text-gray-400"
                                                          >
                                                              <span className="text-gray-600">
                                                                  {highlight}
                                                              </span>
                                                          </li>
                                                      )
                                                  )
                                                : ""}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    "No user data"
                )}
            </div>
        </div>
    );
};

UserProfile.propTypes = {
    match: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired
};

export default UserProfile;
