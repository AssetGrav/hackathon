import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNode } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const ProgressBar = ({ label, progressValue }) => {
    const getProgressColorClassName = () => {
        let progressBarColorClassName = "bg-red-500";
        if (progressValue >= 80) {
            progressBarColorClassName = "bg-green-500";
        } else if (progressValue >= 50) {
            progressBarColorClassName = "bg-yellow-300";
        }
        return progressBarColorClassName;
    };

    const getIconInfo = () => {
        let iconInfo = {};
        if (label === "JavaScript") {
            iconInfo = { colorClassName: "text-yellow-400", icon: faJs };
        } else if (label === "React") {
            iconInfo = { colorClassName: "text-blue-500", icon: faReact };
        } else if (label === "NodeJS") {
            iconInfo = { colorClassName: "text-green-500", icon: faNode };
        }
        return iconInfo;
    };

    return (
        <div className="m-2 p-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <FontAwesomeIcon
                icon={getIconInfo().icon}
                className={`text-5xl ${getIconInfo().colorClassName}`}
            ></FontAwesomeIcon>
            <div className="w-full">
                <div className="text-xl font-medium text-black">{label}</div>
                <div className="h-6 relative max-w-xl rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gray-200 absolute"></div>
                    <div
                        className={`h-full absolute ${getProgressColorClassName()}`}
                        style={{ width: progressValue + "%" }}
                    >
                        <div className="mr-2 text-right">
                            {progressValue + "%"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    label: PropTypes.string,
    progressValue: PropTypes.number
};

export default ProgressBar;
