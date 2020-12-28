import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail() {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.48,
                orderNumber: 'A0048562Z',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'James Walker',
                    shippingAddress: '1234 West State Street',
                    shippingAddressTwo: 'Flagstaff, AZ, 92115'
                }
            },
            {
                _id: 1,
                total: 19.48,
                orderNumber: 'A00455667Z',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Daisy Duke',
                    shippingAddress: '555 Dollar Drive',
                    shippingAddressTwo: 'Hoetown, NB, 92223'
                }
            },
            {
                _id: 2,
                total: 13.00,
                orderNumber: 'A0049999Z',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Grecher Creese',
                    shippingAddress: '1234 Cheech Street',
                    shippingAddressTwo: 'New Paul, AZ, 17539'
                }
            },            {
                _id: 3,
                total: 3.42,
                orderNumber: 'A0048432Z',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Alyssa Jankins',
                    shippingAddress: '1234 West State Street',
                    shippingAddressTwo: 'Flippinburg, NC, 55556'
                }
            },            {
                _id: 4,
                total: 50.00,
                orderNumber: 'A0048888Z',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Liv Livens',
                    shippingAddress: '6161 Eastern Street',
                    shippingAddressTwo: 'Manhattan, NY, 10018'
                }
            },            {
                _id: 5,
                total: 22.99,
                orderNumber: 'A0047777Z',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Chris Binkley',
                    shippingAddress: '1344 Paradise Drive',
                    shippingAddressTwo: 'Modesto, CA, 92115'
                }
            },
            {
                _id: 6,
                total: 18.22,
                orderNumber: 'A0046666Z',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Alica Watkins',
                    shippingAddress: '1342 Spring Street',
                    shippingAddressTwo: 'San Diego, CA, 92115'
                }
            },
            {
                _id: 7,
                total: 19.48,
                orderNumber: 'A0042222Z',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Zaza Damien',
                    shippingAddress: '1503 Jefferson Ave',
                    shippingAddressTwo: 'Brooklyn, NY, 11237'
                }
            }
        ]
    })
}