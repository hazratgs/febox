import {
    LOADER_TYPE_WORK,
    CHANGE_TYPE_WORK,
    SUCCESS_TYPE_WORK,
    HIDDEN_WORK
} from '../constants/Work'

const initialState = {
    works: [
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/eb1e3a99999d646d4a5737b592a63a76.jpg',
            title: 'Новая Третьяковка',
            description: 'Ребрендинг',
            type: 'Веб-сайты'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/d3fb36fa2f98752e290f355b6d0f142b.jpg',
            title: 'Третьяковская галерея',
            description: 'Новый сайт',
            type: 'Веб-сайты'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/811e21ca565de0c6412779f914864a2d.jpg',
            title: 'Nimb',
            description: 'Комплексный запуск бренда',
            type: 'Фирменный стиль'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/676397323a9c762e2aca57d7ec8eae77.jpg',
            title: 'Skylink',
            description: 'Комплексный запуск продукта',
            type: 'Веб-сайты'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/f5d94e77e92e897eec026447813ac546.png',
            title: 'Рамблер',
            description: 'Ребрендинг и UI дизайн-система',
            type: 'Веб-сайты'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/1bd3cbf628c7cf2ad6d0f6d9e2056fcf.jpg',
            title: 'My.com',
            description: 'Система идентификации бренда и digital руководство',
            type: 'Веб-сайты'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/72d90b7a8df90a1450a8e34ca8bc7376.jpg',
            title: 'МегаФон',
            description: 'Digital-ребрендинг',
            type: 'Веб-сайты'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/d6db8df3337aae1ffc6b183d8b16d80b.jpg',
            title: 'Rambler&Co',
            description: 'Комплексный запуск бренда',
            type: 'Фирменный стиль'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/174e1317b74c6f77b9353a115bedfe87.jpg',
            title: 'Norilsk film',
            description: 'Документальный интерактивный фильм',
            type: 'Веб-сайты'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/eeeeecd7e0556b969e7151841fae72ee.jpg',
            title: 'Friends agency',
            description: 'Сайт портфолио',
            type: 'Веб-сайты'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/1b2a058b11c45b08498d89c95125f904.jpg',
            title: 'Уралсиб Страхование',
            description: 'Корпоративный сайт',
            type: 'Веб-сайты'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/ed6f598d277c4de8e0dff4592946239b.jpg',
            title: 'Garage',
            description: 'Корпоративный сайт',
            type: 'Веб-сайты'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/1adae17b9def632183efbd0d23be3d86.jpg',
            title: 'VMETRO',
            description: 'Система идентификации бренда и мобильный портал',
            type: 'Фирменный стиль'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/daee604a6b267bd25b6185f77c23812a.jpg',
            title: 'Rambler&Co',
            description: 'Корпоративный сайт холдинга',
            type: 'Веб-сайты'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/b15e78484ac120e4d53d58fd91571e16.jpg',
            title: 'Yarky hostel',
            description: 'Комплексный запуск бренда',
            type: 'Фирменный стиль'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/28ff10a106186b865330012e8a4ae980.jpg',
            title: 'Ph.D',
            description: 'Система идентификации бренда',
            type: 'Фирменный стиль'
        },
        {
            img: 'https://ony.ru/upload/Blocks/image/case_thumb/bb0ac1011ee2f6cfb93f6b22d22a510b.jpg',
            title: 'Гольфстрим',
            description: 'Корпоративный сайт',
            type: 'Веб-сайты'
        }
    ],
    types: [
        'Все проекты',
        'Веб-сайты',
        'Фирменный стиль',
        'Приложения' 
    ],
    activeType: 'Все проекты', // Активный таб портфолио
    state: 'loader'
}

export default function workState(state = initialState, action) {
    switch (action.type){
        case LOADER_TYPE_WORK:
            return {...state, state: action.payload}

        case CHANGE_TYPE_WORK:
            return {...state, activeType: action.payload}

        case SUCCESS_TYPE_WORK:
            return {...state, state: action.payload}

        case HIDDEN_WORK:
            return {...state, state: action.payload}

        default:
            return state
    }
}