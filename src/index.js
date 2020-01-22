import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';
import { GlobalStyles } from './GlobalStyles';

ReactDOM.render(
    <>
        <GlobalStyles />
        <Routes />
    </>
    , document.getElementById('root'));