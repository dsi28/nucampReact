import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            // make the Browser router component the highest leve component so it has access to all components.
            <BrowserRouter>
                <div className="App">
                    <MainComponent/>
                </div>
            </BrowserRouter>

        );
    }
}
export default App;