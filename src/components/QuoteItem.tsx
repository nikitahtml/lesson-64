import React from 'react';
import { Link } from 'react-router-dom';

interface QuoteItemProps {
    id: string;
    author: string;
    category: string;
    text: string;
    onDelete: (id: string) => void;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ id, author, category, text, onDelete }) => {
    return (
        <div>
            <p>{text}</p>
            <p>- {author}</p>
            <p>Category: {category}</p>
            <Link to={`/edit-quote/${id}`}>Edit</Link>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default QuoteItem;
