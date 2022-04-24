import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Tracks, Track } from './pages';

const App: FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/tracks' element={<Tracks />} />
                <Route path='/tracks/:id' element={<Track />} />
            </Routes>
        </Router>
    );
};

export default App;
