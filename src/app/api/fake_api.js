export const data = [
    {
        _id: "8p103t16",
        name: "Roman Kharitonov",
        position: "Angular developer",
        age: 28,
        picUrl: "https://neutrinoteam.pro/hackathon-01/355c0ca0e35f35450f4e8a4ce59d5158.jpg",
        socials: [
            {
                label: "instagram",
                id: "seniorjava"
            },
            {
                label: "linkedin",
                id: ""
            },
            {
                label: "facebook",
                id: ""
            },
            {
                label: "vk",
                id: "seniorjava"
            },
            {
                label: "github",
                id: "KharitonovRoman"
            },
            {
                label: "telegram",
                id: "seniorjava"
            }
        ],
        about: "I am a web developer from Saint-Petersburg. Most of the time I do tasks on the server side in ColdFusion, but sometimes I do tasks on the client side in Angular.",
        responsobilities: [
            "ProgressBar component",
            "Socials component",
            "Favorites page",
            "UserCard component",
            "Home page restructuring"
        ],
        progress: [
            { name: "JavaScript", value: 80 },
            { name: "React", value: 50 },
            { name: "NodeJS", value: 15 }
        ],
        badge: true
    },
    {
        _id: "8103169f",
        name: "Roman Bura",
        position: "React developer",
        age: 28,
        picUrl: "https://avatars.githubusercontent.com/u/25481692?v=4",
        socials: [
            {
                label: "instagram",
                id: "r2bdev"
            },
            {
                label: "linkedin",
                id: "roma2bura"
            },
            {
                label: "facebook",
                id: ""
            },
            {
                label: "vk",
                id: ""
            },
            {
                label: "github",
                id: "roma2bura"
            },
            {
                label: "telegram",
                id: ""
            }
        ],
        about: "Creative approaches to front-end web development and deep analytical skills proven by a track record of positive feedback from clients and users.",
        responsobilities: [
            "API config",
            "Configure Tailwind UI",
            "Project restructuring",
            "Mockups",
            "Nav component",
            "HomePage component",
            "UserPage component"
        ],
        progress: [
            { name: "JavaScript", value: 84 },
            { name: "React", value: 50 },
            { name: "NodeJS", value: 25 }
        ],
        badge: false
    },
    {
        _id: "c8a17af7",
        name: "Asset GA",
        position: "Web developer",
        age: 40,
        picUrl: "https://neutrinoteam.pro/hackathon-01/539b23ef3acb5889f8fa72afe7648b55.jpg",
        socials: [
            {
                label: "instagram",
                id: ""
            },
            {
                label: "linkedin",
                id: ""
            },
            {
                label: "facebook",
                id: ""
            },
            {
                label: "vk",
                id: ""
            },
            {
                label: "github",
                id: "AssetGrav"
            },
            {
                label: "telegram",
                id: "AssetGravitation"
            }
        ],
        about: "Web developer learn JS want to know JS ",
        responsobilities: ["Slider component"],
        progress: [
            { name: "JavaScript", value: 40 },
            { name: "React", value: 20 },
            { name: "NodeJS", value: 5 }
        ],
        badge: false
    }
];
export const imageDefault = {
    _id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnrVK8Jyc6wVtcNGlykkqw3yyyXMMbJy7yA&usqp=CAU",
    text: "you photo and link",
    www: "https://russianblogs.com/article/98501220273/"
};

export const images = [
    {
        _id: 1,
        img: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        text: "Desk and Office",
        www: "https://russianblogs.com/article/98501220273/"
    },
    {
        _id: 2,
        img: "https://images.unsplash.com/photo-1589987598188-fd7e9105efe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "Working process",
        www: "https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%D0%BC%D0%B8#r_fetching_and_pulling"
    },
    {
        _id: 3,
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/76ea94a0-c0aa-4199-93ca-fe81b5534965/300x450",
        text: "photo",
        www: "https://learn.javascript.ru"
    },
    {
        _id: 4,
        img: "https://www.finversia.ru/site/public/files/7/6782-statya_02.04.2018.jpg",
        text: "dee",
        www: "https://tailwindcss.com"
    }
];

if (!localStorage.getItem("images")) {
    localStorage.setItem("images", JSON.stringify(images));
};
export const imagesFromLocal = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("images")));
        }, 2000);
    });
export const addImages = (data) =>
    new Promise((resolve,reject) => {
        const images = JSON.parse(localStorage.getItem("images"));
        images.push(data);
        localStorage.setItem("images", JSON.stringify(images));
        resolve(images);
    });

