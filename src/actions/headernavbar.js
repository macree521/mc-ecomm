import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS, 
    CHANGE_NAVBAR_ACTIVE
} from './types';

//this is just how redux works
export function setHeaderLinks(links) {
    return ({
        type: SET_HEADER_LINKS,
        payload: links
    })
}

export function setNavbarLinks(links, onClick) {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: {
            links,
            onClick: onClick ? onClick : ''
        }
    })
}

export function changeNavbarActive(_id) {
    return ({
        type: CHANGE_NAVBAR_ACTIVE,
        payload: _id
    })
}