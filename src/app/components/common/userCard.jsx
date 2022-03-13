import { React } from "react";
import Socials from "./socials";

const UserCard = ({ user }) => {
    return (
        <div className="flex flex-col items-center justify-center col-span-1">
            <div className="relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                <a href={user._id}>
                    <img
                        className="relative z-20 w-full rounded-full"
                        src={user.picUrl}
                    />
                </a>
            </div>
            <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                    <a href={user._id} className="hover:text-blue-400">
                        <h3>{user.name}</h3>
                    </a>
                    <p className="text-blue-600">{user.position}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{user.about}</p>
                <div className="relative flex items-center justify-center space-x-3">
                    <Socials socials={user.socials} />
                </div>
            </div>
        </div>
    );
};

export default UserCard;
