import React, { useState } from "react";
import UserCard from "../common/userCard";
import PropTypes from "prop-types";

const Favorites = ({ users }) => {
    let favoriteUserIds = localStorage.getItem("favoriteUserIds");
    favoriteUserIds = favoriteUserIds ? JSON.parse(favoriteUserIds) : [];

    const [favoriteUsers, setFavoriteUsers] = useState(
        users.filter((user) => favoriteUserIds.includes(user._id))
    );

    const handleDeleteFromFavorites = (userIdToDelete) => {
        setFavoriteUsers((prevState) => {
            const newState = prevState.filter(
                (favoriteUser) => favoriteUser._id !== userIdToDelete
            );
            localStorage.setItem(
                "favoriteUserIds",
                JSON.stringify(newState.map((favoriteUser) => favoriteUser._id))
            );
            return newState;
        });
    };

    return (
        <div className="py-12 bg-white">
            <div className="bg-white">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        My Favorite Users
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Group 16/19
                    </p>
                </div>

                <section className="relative py-20 overflow-hidden bg-white">
                    <div className="relative px-16 mx-auto max-w-7xl">
                        <div className="grid w-full grid-cols-3 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {favoriteUsers.map((user) => (
                                <UserCard
                                    key={user._id}
                                    user={user}
                                    onDeleteFromFavorites={
                                        handleDeleteFromFavorites
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

Favorites.propTypes = {
    users: PropTypes.array.isRequired
};

export default Favorites;
