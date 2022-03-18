export const data = [
    {
        _id: "8p103t16",
        name: "Roman Kharitonov",
        age: 28,
        picUrl: "https://picsum.photos/200/200",
        social: [
            {
                label: "Instagram",
                id: "fsdf"
            },
            {
                label: "Facebook",
                id: ""
            }
        ],
        about: "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.",
        responsobilities: [
            "Fugiat ipsum ipsum",
            "Fugiat ipsum ipsum",
            "Fugiat ipsum ipsum",
            "Fugiat ipsum ipsum"
        ],
        progress: [],
        badge: true
    },
    {
        _id: "8103169f",
        name: "Roman Bura",
        age: 28,
        picUrl: "https://r2b.dev/images/r2b-crop.jpeg",
        social: [
            {
                label: "Instagram",
                id: "r2bdev"
            },
            {
                label: "LinkedIn",
                id: "roma2bura"
            }
        ],
        about: "Creative approaches to front- end web development and deep analytical skills proven by a track record of positive feedback from clients and users.",
        responsobilities: [
            "API config",
            "Configure Tailwind UI",
            "Project restructuring",
            "Mockups",
            "Nav component",
            "HomePage component",
            "UserPage component"
        ],
        progress: [],
        badge: false
    },
    {
        _id: "c8a17af7",
        name: "Asset GA",
        age: 30,
        picUrl: "https://picsum.photos/200/200",
        social: [
            {
                label: "Instagram",
                id: "sdf23"
            },
            {
                label: "Facebook",
                id: "pk34"
            }
        ],
        about: "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.",
        responsobilities: [
            "Fugiat ipsum ipsum",
            "Fugiat ipsum ipsum",
            "Fugiat ipsum ipsum",
            "Fugiat ipsum ipsum"
        ],
        progress: [],
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

