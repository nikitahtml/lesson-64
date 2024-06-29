import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import AddQuotePage from './containers/AddQuotePage';
import EditQuotePage from './containers/EditQuotePage';
import CategoryPage from './containers/CategoryPage';

const App: React.FC = () => {
    return (

            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add-quote" element={<AddQuotePage />} />
                    <Route path="/edit-quote/:id" element={<EditQuotePage />} />
                    <Route path="/category/:category" element={<CategoryPage />} />
                </Routes>
            </Router>
        );
    };

export default App;
