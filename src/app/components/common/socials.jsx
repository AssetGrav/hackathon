import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faVk,
    faFacebook,
    faLinkedin,
    faTelegram,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

const Socials = ({ socials }) => {
    const getIconInfo = (socialLabel) => {
        let iconInfo = {};
        if (socialLabel === "telegram") {
            iconInfo = {
                colorClassName: "text-blue-500",
                icon: faTelegram,
                url: "https://t.me"
            };
        } else if (socialLabel === "instagram") {
            iconInfo = {
                colorClassName: "text-red-500",
                icon: faInstagram,
                url: "https://www.instagram.com"
            };
        } else if (socialLabel === "vk") {
            iconInfo = {
                colorClassName: "text-blue-600",
                icon: faVk,
                url: "https://vk.com"
            };
        } else if (socialLabel === "facebook") {
            iconInfo = {
                colorClassName: "text-blue-700",
                icon: faFacebook,
                url: "https://facebook.com"
            };
        } else if (socialLabel === "linkedin") {
            iconInfo = {
                colorClassName: "text-blue-600",
                icon: faLinkedin,
                url: "https://linkedin.com"
            };
        } else if (socialLabel === "github") {
            iconInfo = {
                colorClassName: "text-black-500",
                icon: faGithub,
                url: "https://github.com"
            };
        }

        return iconInfo;
    };

    return (
        <div className="flex justify-center">
            {socials.map((social) => {
                return (
                    social.id && (
                        <a
                            key={social.label}
                            target="_blank"
                            className="m-1"
                            href={`
								${getIconInfo(social.label).url}/${social.id}
							`}
                        >
                            <svg width="0" height="0">
                                <linearGradient
                                    id="blue-gradient"
                                    x1="100%"
                                    y1="100%"
                                    x2="0%"
                                    y2="0%"
                                >
                                    <stop stopColor="#7a6ded" offset="0%" />
                                    <stop stopColor="#591885" offset="100%" />
                                </linearGradient>
                            </svg>
                            <FontAwesomeIcon
                                icon={getIconInfo(social.label).icon}
                                className={`text-4xl ${
                                    getIconInfo(social.label).colorClassName
                                } backdrop-grayscale bg-white/30`}
                                style={{ stroke: "url(#blue-gradient)" }}
                            />
                        </a>
                    )
                );
            })}
        </div>
    );
};

export default Socials;
