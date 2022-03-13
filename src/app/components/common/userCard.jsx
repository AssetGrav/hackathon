import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNode } from "@fortawesome/free-brands-svg-icons";
import Socials from "./socials";

const UserCard = ({ user }) => {
    return (
        <div class="flex flex-col items-center justify-center col-span-1">
            <div class="relative p-5">
                <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                <a href={user._id}>
                    <img
                        class="relative z-20 w-full rounded-full"
                        src={user.picUrl}
                    />
                </a>
            </div>
            <div class="mt-3 space-y-2 text-center">
                <div class="space-y-1 text-lg font-medium leading-6">
                    <a href={user._id} className="hover:text-blue-400">
                        <h3>{user.name}</h3>
                    </a>
                    <p class="text-blue-600">{user.position}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{user.about}</p>
                <div class="relative flex items-center justify-center space-x-3">
                    <Socials socials={user.socials} />
                </div>
            </div>
        </div>
    );
};

export default UserCard;
