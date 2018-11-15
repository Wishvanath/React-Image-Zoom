import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import registerServiceWorker from './registerServiceWorker';
import Home from './component/Home/home';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Wish from './component/wishva/wishva';
import Profile from './component/profile/profile';
import ImageDemo from './component/image_demo/image_demo';
ReactDOM.render(
    <Router>
        <div> 
            {/* define each route here */}
            <Route exact path="/" component={ImageDemo} />
            <Route exact path ="/app" component ={App} />
            <Route exact path ="/wish" component ={Wish} />
            <Route exact path ="/profile" component ={Profile} />
            {/* <Route exact path ="/image-demo" component={ImageDemo} /> */}
        </div>
    </Router>
    
    
    , document.getElementById('root'));
registerServiceWorker();
