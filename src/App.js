import React, { Component } from 'react';
import './App.css';
import ProductList from './Containers/ProductList/ProductList';

class App extends Component {
    render() {
        return (
            <div className="App ui container">
                <ProductList />
            </div>
        );
    }
}

export default App;
