import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from "./components/App";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import rootReducere from "./store";
import thunk from "redux-thunk";
// import "./test.css";
const store = createStore(rootReducere,applyMiddleware(thunk));
const rootEl = document.getElementById('root');
const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, rootEl
    );
}

renderApp();

export default hot(renderApp);