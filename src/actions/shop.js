import {
    //SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS
} from './types';

export function fetchShopCategories () {
    return ({
        type: SET_NAVBAR_LINKS,
        //done this way so you can add in more categories if needed
        //Simulating fetching this data from the back end
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