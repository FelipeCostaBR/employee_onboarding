import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { EmployeeProvider } from './context/EmployeeContext';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <>
        <Router>
            <EmployeeProvider>
                <Routes />
            </EmployeeProvider>
        </Router>
        <GlobalStyle />
    </>
);

export default App;
