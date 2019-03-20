import React, { Component } from 'react'
import * as seed from '../../seed';
import Product from '../../Components/Product/Product';

class ProductList extends Component {
    state = {
        products: []
    }

    // whether API call or seed we set the state here
    componentDidMount() {
        this.setState({
            products: seed.products
        })
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        })
        this.setState({
            products: nextProducts,
        })
    }

    render() {
        const products = this.state.products.sort((a, b) => (
            b.votes - a.votes
        ))
        const productList = products.map((product) => (
            <Product
                key={'product-' + product.id}
                id={ product.id }
                title={ product.title }
                description={ product.description }
                url={ product.url }
                votes={ product.votes }
                submitterAvatarUrl={ product.submitterAvatarUrl }
                productImageUrl={ product.productImageUrl }
                onVote={ this.handleProductUpVote }
            />
        ));

        return (
            <div className='ui unstackable items'>
                <h1>Today</h1>
                { productList }
            </div>
        );
    }
}

ProductList.defaultProps = {
    products: seed.products,
}

export default ProductList;

