import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Shop extends Component {

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]

        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        this.props.fetchShopProducts();
            //filter products with links
    }

    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }
        return true
    }

    render() {
        return (
        <div className="shop">
            {/* shop searchbar 
            shop product component - goign to simulate pulling from the back end
            cart button */}
        </div>
        );
    }
}

function mapStateToProps(state) {
    //pulling categories out of shop
    const { categories } = state.shop
    return {
        categories
    }
}

Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;