import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import Balance from '../balance/Balance';
import Goals from '../goals/Goals';

const PrimaryLayout = () => (
    <div className="primary-layout">
        <header>
            <h1>Rooster Money</h1>
            <nav>
                <ul>
                    <li><Link to="/balance">Balance</Link></li>
                    <li><Link to="/goals">Goals</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <Route exact path="/" component={Balance} />
            <Route path="/balance" component={Balance} />
            <Route path="/goals" component={Goals} />
        </main>
    </div>
);

const App = () => (
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>
);

export default App;
