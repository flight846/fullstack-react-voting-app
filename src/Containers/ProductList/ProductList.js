import React, { Component } from 'react'
import * as seed from '../../seed';
import Product from '../../Components/Product/Product';

class ProductList extends Component {
    render() {
        const { products } = this.props;
        const productComponents = products.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
            />
        ));

        return (
            <div className='ui unstackable items'>
                { productComponents }
            </div>
        );
    }
}

ProductList.defaultProps = {
    products: seed.products,
}

export default ProductList;

