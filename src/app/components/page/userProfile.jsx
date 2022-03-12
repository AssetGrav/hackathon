import { React } from "react";
import ProgressBar from "../common/progressBar";

const UserProfile = (userId) => {
    return (
        <>
            <h1>Страница участника</h1>

            <ProgressBar label="JavaScript" progressValue="80" />
            <ProgressBar label="React" progressValue="50" />
            <ProgressBar label="NodeJS" progressValue="10" />
        </>
    );
};

export default UserProfile;
