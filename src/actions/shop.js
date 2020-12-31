import {
    //SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS
} from './types';

export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            }
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'Javascript in the Browser',
                description: 'Investing time to improve your listening skills really pays off: The best listeners enjoy stronger relationships at and outside of work, are far more productive, and boast high confidence levels, just to name a few.',
                price: 1.99,
                belongsTo : [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Investing time to improve your listening skills really pays off: The best listeners enjoy stronger relationships at and outside of work, are far more productive, and boast high confidence levels, just to name a few.',
                price: 1.99,
                belongsTo : [0, 5]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'Investing time to improve your listening skills really pays off: The best listeners enjoy stronger relationships at and outside of work, are far more productive, and boast high confidence levels, just to name a few.',
                price: 1.99,
                belongsTo : [0, 1, 4]
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'Investing time to improve your listening skills really pays off: The best listeners enjoy stronger relationships at and outside of work, are far more productive, and boast high confidence levels, just to name a few.',
                price: 1.99,
                belongsTo : [0, 2]
            },
            {
                _id: 4,
                title: 'JavaScript Development',
                description: 'Investing time to improve your listening skills really pays off: The best listeners enjoy stronger relationships at and outside of work, are far more productive, and boast high confidence levels, just to name a few.',
                price: 1.99,
                belongsTo : [0, 1]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'Investing time to improve your listening skills really pays off: The best listeners enjoy stronger relationships at and outside of work, are far more productive, and boast high confidence levels, just to name a few.',
                price: 1.99,
                belongsTo : [0, 2]
            },
            {
                _id: 6,
                title: 'Advanced OOP',
                description: 'Investing time to improve your listening skills really pays off: The best listeners enjoy stronger relationships at and outside of work, are far more productive, and boast high confidence levels, just to name a few.',
                price: 1.99,
                belongsTo : [0, 6]
            }
        
        ]
    })
}