import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS
} from './types';

//this is just how redux works
export function setHeaderLinks(links) {
    return ({
        type: SET_HEADER_LINKS,
        payload: links
    })
}

export function setNavbarLinks(links) {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: links
    })
}