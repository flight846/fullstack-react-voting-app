import React, { Component } from 'react'

class Product extends Component {
    render() {
        const imgSrc = '../../assets/images/';

        return (
            <div className='item'>
                <div className='image'>
                    <img src={ require(imgSrc + this.props.productImageUrl) } alt={ this.props.title }/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a href='/'>
                            <i className='large caret up icon' />
                        </a>
                        { this.props.votes }
                    </div>
                    <div className='description'>
                        <a href={  this.props.url }>
                            { this.props.title }
                        </a>
                        <p>
                            { this.props.description }
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={ require(imgSrc + this.props.submitterAvatarUrl) }
                            alt={ this.props.title }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
