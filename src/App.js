import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore} from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                // make the Browser router component the highest leve component so it has access to all components.
                <BrowserRouter>
                    <div className="App">
                        <MainComponent/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default App;