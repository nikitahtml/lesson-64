import React, { useEffect, useState } from 'react';
import axiosApi from '../axiosApi';
import QuoteList from '../components/QuoteList';

const HomePage: React.FC = () => {
    const [quotes, setQuotes] = useState<{ id: string; author: string; category: string; text: string }[]>([]);

    useEffect(() => {
        axiosApi.get('/quotes.json').then(response => {
            const quotesData = response.data;
            const loadedQuotes = [];
            for (const key in quotesData) {
                loadedQuotes.push({ id: key, ...quotesData[key] });
            }
            setQuotes(loadedQuotes);
        });
    }, []);

    const handleDelete = (id: string) => {
        axiosApi.delete(`/quotes/${id}.json`).then(() => {
            setQuotes(prevQuotes => prevQuotes.filter(quote => quote.id !== id));
        });
    };

    return <QuoteList quotes={quotes} onDelete={handleDelete} />;
};

export default HomePage;
