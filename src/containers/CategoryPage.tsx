import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../axiosApi';
import QuoteList from '../components/QuoteList';

const CategoryPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const [quotes, setQuotes] = useState<{ id: string; author: string; category: string; text: string }[]>([]);


    useEffect(() => {
        axiosApi.get(`/quotes.json?orderBy="category"&equalTo="${category}"`).then(response => {
            const quotesData = response.data;
            const loadedQuotes = [];
            for (const key in quotesData) {
                loadedQuotes.push({ id: key, ...quotesData[key] });
            }
            setQuotes(loadedQuotes);
        });

    }, [category]);



    const handleDelete = (id: string) => {
        axiosApi.delete(`/quotes/${id}.json`).then(() => {
            setQuotes(prevQuotes => prevQuotes.filter(quote => quote.id !== id));
        });
    };


    return <QuoteList quotes={quotes} onDelete={handleDelete} />;
};

export default CategoryPage;
