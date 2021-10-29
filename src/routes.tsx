import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './view/Home';
import RickAndMorty from './view/RickAndMorty';
import Nav from './components/Nav';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
        <Nav/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/ram' component={RickAndMorty} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;