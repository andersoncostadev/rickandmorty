import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './view/Home';
import RickAndMorty from './view/RickAndMorty';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/ram' component={RickAndMorty} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;