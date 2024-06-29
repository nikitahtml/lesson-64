import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../axiosApi';
import QuoteForm from '../components/QuoteForm';



const EditQuotePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [quote, setQuote] = useState<{ author: string; category: string; text: string } | null>(null);



    useEffect(() => {
        axiosApi.get(`/quotes/${id}.json`).then(response => {
            setQuote(response.data);
        });
    }, [id]);



    const handleSave = (author: string, category: string, text: string) => {
        axiosApi.put(`/quotes/${id}.json`, { author, category, text }).then(() => {
            navigate('/');
        });
    };


    return quote ? <QuoteForm initialAuthor={quote.author} initialCategory={quote.category} initialText={quote.text} onSave={handleSave} /> : <p>Loading...</p>;
};


export default EditQuotePage;
