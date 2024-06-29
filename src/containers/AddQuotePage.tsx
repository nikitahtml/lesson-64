import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../axiosApi';
import QuoteForm from '../components/QuoteForm';

const AddQuotePage: React.FC = () => {
    const navigate = useNavigate();


    const handleSave = (author: string, category: string, text: string) => {
        axiosApi.post('/quotes.json', { author, category, text }).then(() => {
            navigate('/');
        });
    };

    return <QuoteForm onSave={handleSave} />;
};


export default AddQuotePage;
